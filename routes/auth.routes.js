import { Router } from "express";
import {
  login,
  logout,
  register,
  verify,
} from "../controllers/auth.controllers.js";

const routes = Router();

routes.post("/register", register);

routes.post("/login", login);

routes.get("/verify", verify);

routes.post("/logout", logout);

export default routes;
