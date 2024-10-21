import Channel from "../models/channel.model.js";
import Server from "../models/server.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const getChannel = async (req, res) => {
  const { id } = req.params;

  try {
    const channelFind = await Channel.findById(id);

    if (!channelFind) {
      return res.status(400).json(["Channel not found"]);
    }

    res.status(200).json(channelFind);
  } catch (err) {
    res.status(500).json(["Error getting channel"]);
  }
};

export const getChannels = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json(["Unauthorized"]);
  }

  try {
    const { id } = req.params;

    const serverFind = await Server.findById(id);

    if (!serverFind) {
      return res.status(400).json(["Server not found"]);
    }

    const channel = await Channel.find({
      server: serverFind._id,
    });

    res.status(200).json(channel);
  } catch (err) {
    res.status(500).json(["Error getting channels"]);
  }
};

export const createChannel = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const userId = data.id;

    console.log(userId); // Tomamos el ID del usuario desde el token

    // Usar el serverId desde los parámetros de la ruta
    const { id } = req.params;

    console.log(id);

    // Encontrar el servidor con el ID proporcionado
    const serverFind = await Server.findById(id);

    if (!serverFind) {
      return res.status(404).json(["Server not found"]);
    }

    // Verificar que el usuario sea el dueño del servidor
    if (serverFind.user.toString() !== userId) {
      return res.status(403).json(["Forbidden"]);
    }

    // Crear el canal
    const { name } = req.body;

    const channel = new Channel({
      name,
      server: serverFind._id,
    });

    const newChannel = await channel.save();

    res.status(201).json(newChannel);
  } catch (err) {
    console.error(err);
    res.status(500).json(["Error creating channel"]);
  }
};

export const updateChannel = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updateChannel = await Channel.findByIdAndUpdate(
      id,
      {
        name,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateChannel);
  } catch (err) {
    res.status(500).json(["Error updating channel"]);
  }
};

export const deleteChannel = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteChannel = await Channel.findByIdAndDelete(id);

    if (!deleteChannel) {
      return res.status(400).json(["Channel not found"]);
    }

    res.status(200).json(["Channel deleted successfully"]);
  } catch (err) {
    res.status(500).json(["Error deleting channel"]);
  }
};
