import express from "express"
import dotenv from "dotenv"
import { authRouter } from "./routes/authRoutes.js"
import { connectDb } from "./config/connectDb.js"
const app = express()

app.use(express.json())
app.use("/api/auth",authRouter)

dotenv.config()

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("server has started...");
    connectDb();
})
