import mongoose, { mongo, Schema }  from "mongoose";
const providerProfileSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
        unique:true
    },

    current_engagement_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'engagements',
        default:null
    },

    total_complted_services:{
        type:Number,
        default:0
    },

    tagLine:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:"",
    },
},{timestamps:true})

const serviceProvider = mongoose.model('service_provider',providerProfileSchema);
export default serviceProvider;