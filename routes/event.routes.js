import { Router } from "express";
import {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controllers.js";

const routes = Router();

routes.get("/:id", getEvent);

routes.get("/", getEvents);

routes.post("/", createEvent);

routes.put("/:id", updateEvent);

routes.delete("/:id", deleteEvent);

export default routes;
