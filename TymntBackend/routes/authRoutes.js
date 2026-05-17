import express from "express"
import { signInController, signupController } from "../controller/userConrollers/authController.js"
import { profileController } from "../controller/userConrollers/userController.js"
import { tokenChecker } from "../middleware/tokenCheck.js"
export const authRouter = express.Router()
export const userRouter = express.Router()

authRouter.post("/signup", signupController)
authRouter.post("/signin", signInController)
userRouter.get("/profile", tokenChecker, profileController)
