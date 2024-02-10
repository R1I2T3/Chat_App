import { Router } from "express";
import { SignUp, SignIn, LogOut } from "../controller/auth.controller.js";
const router = Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.route("/logout").post(LogOut);

export default router;
