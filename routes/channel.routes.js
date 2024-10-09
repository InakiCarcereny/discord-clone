import { Router } from "express";
import {
  getChannel,
  getChannels,
  createChannel,
  updateChannel,
  deleteChannel,
} from "../controllers/channel.controller.js";

const routes = Router();

routes.get("/:id", getChannel);

routes.get("/", getChannels);

routes.post("/", createChannel);

routes.put("/:id", updateChannel);

routes.delete("/:id", deleteChannel);

export default routes;
