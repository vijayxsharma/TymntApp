import express from "express"
import { signInController, signupController } from "../controller/authController.js"
export const authRouter = express.Router()

authRouter.post("/signup", signupController)
authRouter.post("/signin", signInController)