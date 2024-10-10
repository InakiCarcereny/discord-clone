import { Router } from "express";
import {
  getServer,
  getServers,
  createServer,
  updateServer,
  deleteServer,
} from "../controllers/server.controllers.js";
import upload from "../middleware/upload.middleware.js";

import { serverSchema } from "../schemas/server.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.get("/:id", getServer);

routes.get("/", getServers);

routes.post("/", upload.single("logo"), isValidate(serverSchema), createServer);

routes.put("/:id", isValidate(serverSchema), updateServer);

routes.delete("/:id", deleteServer);

export default routes;
