import engagement from "../../Model/engagement.js";
import serviceRequests from "../../Model/service_requests.js";

export const requestAcceptController = async (req,res)=>{
    console.log("request Accept path is clear....")
    try {
        const providerId = req.userId;
        const {id} = req.params;
        // console.log(req.params)
        const request = await serviceRequests.findOneAndUpdate(
            {
                _id:id,
                status:"OPEN"
            },
            {
                status:"ACCEPTED",
                service_provider_id:providerId
            },
            {new:true}
        );
        console.log(request)
        if(!request){
            return res.status(400).json({
                status:"Fail",
                message:"Request already accepted"
            })
        }
        const newEngagement = await engagement.create({
            request_id:request._id,
            consumer_id:request.consumer_id,
            provider_id:providerId,
            status:"ACCEPTED"
        })
        res.status(200).json({
            status:"Success",
            message:"Request accepted Successfully",
            engagement:newEngagement
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error ${error.message}`,
        })
    }
}