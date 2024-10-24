import { Router } from "express";
import {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controllers.js";

import { EventSchema } from "../schemas/event.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.get("/:id/event/:id", getEvent);

routes.get("/:id/event", getEvents);

routes.post("/:id/event", isValidate(EventSchema), createEvent);

routes.put("/:id/event/:id", isValidate(EventSchema), updateEvent);

routes.delete("/:id/event/:id", deleteEvent);

export default routes;
