import express from "express"
import { signInController, signupController } from "../controller/authController.js"
import { profileController } from "../controller/userController.js"
export const authRouter = express.Router()
export const userRouter = express.Router()


authRouter.post("/signup", signupController)
authRouter.post("/signin", signInController)
userRouter.get("/profile", profileController)