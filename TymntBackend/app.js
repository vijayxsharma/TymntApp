import express from "express"
import dotenv from "dotenv"
import { authRouter, userRouter } from "./routes/authRoutes.js"
import { connectDb } from "./config/connectDb.js"
import { tokenChecker } from "./middleware/tokenCheck.js"
import { requestRouter } from "./routes/requestRoutes.js"
import { requestFilterRouter } from "./routes/requestFilterRoutes.js"
const app = express()

app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/user", userRouter)

app.use("/api/request",requestRouter)

app.use("/api",requestFilterRouter);


dotenv.config()

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("server has started...");
    connectDb();
})
