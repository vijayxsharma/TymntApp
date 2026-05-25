import mongoose from "mongoose";

const serviceRequestSchema  = new mongoose.Schema({

    consumer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    max_budget:{
        type:Number,
        required:true,
    },

    estimated_duration:String,

    status:{
        type:String,
        enum:[
            'OPEN',
            'ACCEPTED',
            'IN_PROGRESS',
            'COMPLETED',
            'CANCELLED'
        ],
        default:'OPEN',
    },

    service_provider_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        default:null
    },

    accepted_at:Date,

    expired_at:Date,

},{timestamps:true});

const serviceRequests = mongoose.model(
    'service_requests',
    serviceRequestSchema
);

export default serviceRequests;