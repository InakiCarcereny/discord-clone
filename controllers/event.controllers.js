import Event from "../models/event.model.js";
import Server from "../models/server.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const eventFind = await Event.findById(id);

    if (!eventFind) {
      return res.status(400).json(["Event not found"]);
    }

    res.status(200).json(eventFind);
  } catch (err) {
    res.status(500).json(["Error getting event"]);
  }
};

export const getEvents = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const { id } = req.params;

    const serverFind = await Server.findById(id);

    if (!serverFind) {
      return res.status(400).json(["Server not found"]);
    }

    const event = await Event.find({
      server: serverFind._id,
    });

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json(["Error getting events"]);
  }
};

export const createEvent = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const { id } = req.params;

    const serverFind = await Server.findById(id);

    if (!serverFind) {
      return res.status(400).json(["Server not found"]);
    }

    const {
      theme,
      dateInit,
      dateEnd,
      timeInit,
      timeEnd,
      frequency,
      description,
      logo,
    } = req.body;

    const event = new Event({
      theme,
      dateInit,
      dateEnd,
      timeInit,
      timeEnd,
      frequency,
      description,
      logo,
      server: serverFind._id,
    });

    const newEvent = await event.save();

    res.status(201).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(500).json(["Error creating event", err]);
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const {
    theme,
    dateInit,
    dateEnd,
    timeInit,
    timeEnd,
    frequency,
    description,
    logo,
  } = req.body;

  try {
    const updateEvent = await Event.findByIdAndUpdate(
      id,
      {
        theme,
        dateInit,
        dateEnd,
        timeInit,
        timeEnd,
        frequency,
        description,
        logo,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateEvent);
  } catch (err) {
    res.status(500).json(["Error updating event"]);
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteEvent = await Event.findByIdAndDelete(id);

    if (!deleteEvent) {
      return res.status(400).json(["Event not found"]);
    }

    res.status(200).json(["Event deleted successfully"]);
  } catch (err) {
    res.status(500).json(["Error deleting event"]);
  }
};
