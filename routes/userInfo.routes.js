import { Router } from "express";
import { updateInfo } from "../controllers/userInfo.controllers.js";

const routes = Router();

routes.put("/", updateInfo);

export default routes;
