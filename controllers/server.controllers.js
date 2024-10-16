import Server from "../models/server.model.js";
import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const getServer = async (req, res) => {
  const { id } = req.params;

  try {
    const serverFind = await Server.findById(id);

    if (!serverFind) {
      return res.status(400).json(["Server not found"]);
    }

    res.status(200).json(serverFind);
  } catch (err) {
    res.status(500).json(["Error getting server"]);
  }
};

export const getServers = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const { id } = data;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(400).json(["User not found"]);
    }

    const server = await Server.find({
      user: userFind._id,
    });

    res.status(200).json(server);
  } catch (err) {
    res.status(500).json(["Error getting servers"]);
  }
};

export const createServer = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const { id } = data;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(400).json(["User not found"]);
    }

    if (
      !req.file ||
      !["image/png", "image/jpeg", "image/jpg"].includes(req.file.mimetype)
    ) {
      return res.status(400).json(["Invalid file type"]);
    }

    const { tittle } = req.body;

    const server = new Server({
      tittle,
      logo: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      user: userFind._id,
    });

    const savedServer = await server.save();

    res.status(201).json(savedServer);
  } catch (err) {
    console.log(err);
    res.status(500).json(["Error creating server"]);
  }
};

export const updateServer = async (req, res) => {
  try {
    const { id } = req.params;
    const { tittle, logo } = req.body;

    const updateServer = await Server.findByIdAndUpdate(
      id,
      {
        tittle,
        logo,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateServer);
  } catch (err) {
    res.status(500).json(["Error updating server"]);
  }
};

export const deleteServer = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteServer = await Server.findByIdAndDelete(id);

    if (!deleteServer) {
      return res.status(400).json(["Server not found"]);
    }

    res.status(200).json(["Server deleted successfully"]);
  } catch (err) {
    res.status(500).json(["Error deleting server"]);
  }
};
