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

routes.get("/:id/channel/:id", getChannel);

routes.get("/:id/channel", getChannels);

routes.post("/:id/channel", isValidate(createChannelSchema), createChannel);

routes.put("/:id/channel/:id", isValidate(updateChannelSchema), updateChannel);

routes.delete("/:id/channel/:id", deleteChannel);

export default routes;
