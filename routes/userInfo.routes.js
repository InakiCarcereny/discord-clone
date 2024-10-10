import { Router } from "express";
import { updateInfo } from "../controllers/userInfo.controllers.js";

import { userInfoSchema } from "../schemas/userInfo.schema.js";
import { isValidate } from "../middleware/user.middleware.js";

const routes = Router();

routes.put("/", isValidate(userInfoSchema), updateInfo);

export default routes;
