import serviceRequests from "../../Model/service_requests.js";

export const newRequestController = async(req,res)=>{
    try {
        console.log("request generating..");
        
        const {category, description,max_budget} = req.body;
        if(!category || !description || !max_budget){
            return res.status(400).json({
            status:'Fail',
            message:'All fields are required'
            });
        }

        const request =  await serviceRequests.create({
        consumer_id:req.userId,
        category,
        description,
        max_budget
        });

        res.status(201).json({
            status:"success",
            message:"Request created successfully",
            request
        });
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error.message}`
        });
    }
};

export const getAllRequestsController = async(req, res)=>{
    try {
        const {status} = req.query;
        let filter = {};
        // console.log(status)
        if(status){
            filter.status = status;
        }
        const requests = await serviceRequests
                               .find(filter)
                               .populate("consumer_id")
                               .populate("service_provider_id")
                               .sort({createdAt:-1});
        res.status(201).json({
            status:"success",
            message:"Request fetched Successfully",
            requests
        });
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error.message}`
        });
    }
}

export const deleteRequestController = async(req, res)=>{
    try {

        // console.log("LOGGED USER:", req.userId);

        const request = await serviceRequests.findById(req.params.id);

        console.log("PARAM ID:", req.params.id);
        console.log("REQUEST DATA:", request);

        if(!request){
            return res.status(404).json({
                status:"Fail",
                message:"Request not found",
            });
        }

        console.log("REQUEST OWNER:", request.consumer_id.toString());

        if(request.consumer_id.toString() !== req.userId){

            return res.status(403).json({
                status:"Fail",
                message:"You are not authorize to delete this request"
            });
        }

        const deletedCard = await serviceRequests.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:"Success",
            message:"Request deleted Successfully",
            deletedCard:deletedCard
        });

    } catch (error) {

        res.status(400).json({
            status:"Fail",
            message:`Error :${error.message}`,
        });
    }
}

export const updateRequestController = async(req,res)=>{
    try {
        // console.log(req.userId);
        // console.log(req.params.id);
        const request = await serviceRequests.findById(req.params.id);
        if(!request){
            return res.status(404).json({
                status:"Fail",
                message:"Request not found"
            });
        }
        if(request.consumer_id.toString() !== req.userId){
            return res.status(403).json({
                status:"Fail",
                message:"You are not authorize to update this."
            })
        }
        const updatedRequest = await serviceRequests.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        ).populate("consumer_id");        
        console.log("Request updated successfully")
        res.status(200).json({
            status:"Success",
            message:"Request updated Successfully",
            updatedRequest:updatedRequest,
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error.message}`
        })
    }
}