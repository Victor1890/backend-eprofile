import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/auth.controller";
import { verifySignUp, authJwt } from "../middlewares";

router.post(
  "/signup",
  [verifySignUp.checkDuplicateNickName, verifySignUp.checkDuplicateUserEmail],
  userCtrl.signUp,
);

router.post("/signin", [authJwt.verifyToken], userCtrl.signIn);

export default router;
