import { Router } from "express";
import { fetchUser } from "../controller/user.controller.js";
import Authorize from "../middleware/authorize.middleware.js";
const router = Router();

router.get("/", Authorize, fetchUser);

export default router;
