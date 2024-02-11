import { Router } from "express";
import { SignUp, SignIn, LogOut } from "../controller/auth.controller.js";
import Authorize from "../middleware/authorize.middleware.js";
const router = Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.post("/logout", Authorize, LogOut);

export default router;
