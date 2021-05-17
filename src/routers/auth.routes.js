import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/auth.controller";
import { verifySignUp } from "../middlewares";

router.post(
  "/signup",
  [verifySignUp.checkDuplicateNickName, verifySignUp.checkDuplicateUserEmail],
  userCtrl.signUp,
);

router.post("/signin", userCtrl.signIn);

router.get("/:id", userCtrl.getUserById);

export default router;
