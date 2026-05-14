import express from "express"
import { tokenChecker } from "../middleware/tokenCheck.js";
import { getAllRequestsController, newRequestController } from "../controller/requestController.js";
export const requestRouter = express.Router();

requestRouter.post("/",tokenChecker, newRequestController);
requestRouter.get('/',getAllRequestsController);
