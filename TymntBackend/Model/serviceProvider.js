import mongoose, { mongo, Schema }  from "mongoose";
const providerProfileSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
        unique:true
    },
    tagLine:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:"",
    },
    active_request_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'service_requests',
        default:null,
    },
},{timestamps:true})

const serviceProvider = mongoose.model('service_provider',providerProfileSchema);
export default serviceProvider;