import { Router } from "express";
import {
  fetchUser,
  updateAccountDetails,
} from "../controller/user.controller.js";
import Authorize from "../middleware/authorize.middleware.js";
const router = Router();

router.get("/", Authorize, fetchUser);
router.put("/update/:id", Authorize, updateAccountDetails);

export default router;
