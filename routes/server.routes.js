import { Router } from "express";
import {
  getServer,
  getServers,
  createServer,
  updateServer,
  deleteServer,
} from "../controllers/server.controllers.js";

const routes = Router();

routes.get("/:id", getServer);

routes.get("/", getServers);

routes.post("/", createServer);

routes.put("/:id", updateServer);

routes.delete("/:id", deleteServer);

export default routes;
