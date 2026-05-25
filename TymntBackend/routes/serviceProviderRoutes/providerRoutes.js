import express from "express"
import { getSingleProviderController } from "../../controller/serviceProviderControllers/providerController.js"
export const providerRouter = express.Router()
providerRouter.get("/:id", getSingleProviderController)