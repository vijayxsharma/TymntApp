import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.ATLAS_URL);
        console.log("Database has been connected...");
        
    } catch (error) {
        console.log(error)
    }
}