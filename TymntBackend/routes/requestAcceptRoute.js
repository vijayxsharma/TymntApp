import express from "express";
import { tokenChecker } from "../middleware/tokenCheck.js";
import { requestAcceptController } from "../controller/serviceRequestControllers/requestAcceptConroller.js";
export const requestAcceptRouter = express.Router();
requestAcceptRouter.patch("/accept-request/:id",tokenChecker,requestAcceptController);