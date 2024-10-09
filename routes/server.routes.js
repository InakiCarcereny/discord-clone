import { Router } from "express";
import {
  getServer,
  getServers,
  createServer,
  updateServer,
  deleteServer,
} from "../controllers/server.controllers.js";
import upload from "../middleware/upload.middleware.js";

const routes = Router();

routes.get("/:id", getServer);

routes.get("/", getServers);

routes.post("/", upload.single("logo"), createServer);

routes.put("/:id", updateServer);

routes.delete("/:id", deleteServer);

export default routes;
