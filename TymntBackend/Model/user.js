import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    provider_profile_completed:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model("users",userSchema);
export default User;