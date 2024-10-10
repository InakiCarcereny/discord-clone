import { Router } from "express";
import {
  getChannel,
  getChannels,
  createChannel,
  updateChannel,
  deleteChannel,
} from "../controllers/channel.controller.js";

import {
  createChannelSchema,
  updateChannelSchema,
} from "../schemas/channel.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.get("/:id", getChannel);

routes.get("/", getChannels);

routes.post("/", isValidate(createChannelSchema), createChannel);

routes.put("/:id", isValidate(updateChannelSchema), updateChannel);

routes.delete("/:id", deleteChannel);

export default routes;
