import { Router } from "express";
import {
  login,
  logout,
  register,
  verify,
} from "../controllers/auth.controllers.js";

import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.post("/register", isValidate(registerSchema), register);

routes.post("/login", isValidate(loginSchema), login);

routes.get("/verify", verify);

routes.post("/logout", logout);

export default routes;
