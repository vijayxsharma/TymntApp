import express from "express";
import { requestFilterController } from "../controller/serviceRequestControllers/requestFilterController.js";
export const requestFilterRouter = express.Router();
requestFilterRouter.get('/filteredRequest',requestFilterController)