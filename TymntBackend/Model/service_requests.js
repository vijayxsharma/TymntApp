import mongoose from "mongoose";

const service_request_Schema = new mongoose.Schema({

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

    status:{
        type:String,
        default:'Accept',
    },

    service_provider_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
    }

},{timestamps:true});

const serviceRequests = mongoose.model(
    'service_requests',
    service_request_Schema
);

export default serviceRequests;