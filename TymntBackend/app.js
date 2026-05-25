import express from "express"
import dotenv from "dotenv"
import { authRouter, userRouter } from "./routes/authRoutes.js"
import { connectDb } from "./config/connectDb.js"
import { tokenChecker } from "./middleware/tokenCheck.js"
import { requestRouter } from "./routes/requestRoutes.js"
import { requestFilterRouter } from "./routes/requestFilterRoutes.js"
import { requestAcceptRouter } from "./routes/requestAcceptRoute.js"
import { providerProfileRouter } from "./routes/serviceProviderRoutes/providerProfileRoutes.js"
import { providerRouter } from "./routes/serviceProviderRoutes/providerRoutes.js"
dotenv.config()
const app = express()

app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/user", userRouter)

app.use("/api/request",requestRouter)
app.use("/api",requestFilterRouter);
app.use("/api",requestAcceptRouter);

app.use("/api/provider",providerProfileRouter)
app.use("/api/provider",providerRouter)


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("server has started...");
    connectDb();
})
