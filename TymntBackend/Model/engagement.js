import mongoose from "mongoose";
const engagementSchema = new mongoose.Schema({
    request_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'service_requests'
    },

    consumer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },

    provider_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },

    status:{
        type:String,
        enum:[
            'ACCEPTED',
            'START',
            'IN_PROGRESS',
            'STOP',
            'COMPLETED',
            'CANCELLED',
            'PAYMENT_PENDING',
            'PAID'
        ],
        default:'PENDING'
    },

    started_at:Date,

    ended_at:Date,

    total_duration_seconds:Number,

    final_amount:Number,

    consumer_approved_start:{
        type:Boolean,
        default:false
    },

    consumer_approved_stop:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const engagement = mongoose.model('engagements',engagementSchema);
export default engagement;