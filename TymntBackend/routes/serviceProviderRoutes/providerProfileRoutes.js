import express from "express"
import { checkProviderProfileController } from "../../controller/serviceProviderControllers/checkProviderProfileController.js";
import { tokenChecker } from "../../middleware/tokenCheck.js";
import { createProviderController } from "../../controller/serviceProviderControllers/providerController.js";
export const providerProfileRouter = express.Router();
providerProfileRouter.get("/isProfileComlete",tokenChecker,checkProviderProfileController)
providerProfileRouter.post("/",tokenChecker,createProviderController)