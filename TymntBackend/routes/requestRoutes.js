import express from "express"
import { tokenChecker } from "../middleware/tokenCheck.js";
import { deleteRequestController, getAllRequestsController, newRequestController, updateRequestController } from "../controller/serviceRequestControllers/requestController.js";
export const requestRouter = express.Router();

requestRouter.post("/",tokenChecker, newRequestController);
requestRouter.get('/',getAllRequestsController);
requestRouter.delete('/:id',tokenChecker,deleteRequestController);
requestRouter.put('/:id',tokenChecker,updateRequestController);

