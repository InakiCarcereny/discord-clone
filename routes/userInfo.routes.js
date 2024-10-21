import { Router } from "express";
import {
  getUserInfo,
  updateInfo,
} from "../controllers/userInfo.controllers.js";

import upload from "../middleware/upload.middleware.js";

import { userInfoSchema } from "../schemas/userInfo.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.get("/", getUserInfo);

routes.put(
  "/",
  upload.fields([{ name: "avatar" }, { name: "banner" }]),
  isValidate(userInfoSchema),
  updateInfo
);

export default routes;
