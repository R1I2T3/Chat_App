import { Router } from "express";
import { sendMessage, getMessage } from "../controller/message.controller.js";
import Authorize from "../middleware/authorize.middleware.js";
const router = Router();

router.post("/send/:id", Authorize, sendMessage);
router.get("/get/:id", Authorize, getMessage);

export default router;
