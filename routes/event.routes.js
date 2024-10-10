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

routes.get("/:id", getEvent);

routes.get("/", getEvents);

routes.post("/", isValidate(EventSchema), createEvent);

routes.put("/:id", isValidate(EventSchema), updateEvent);

routes.delete("/:id", deleteEvent);

export default routes;
