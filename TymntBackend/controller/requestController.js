import serviceRequests from "../Model/service_requests.js";

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
        const requests = await serviceRequests
                               .find()
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

// export const getSingleRequestsController = async(req, res)=>{
//     try {
//         const SingleRequest = await serviceRequests
//                                .find()
//                                .populate("consumer_id")
//                                .populate("service_provider_id")
//                                .sort({createdAt:-1});
//         res.status(201).json({
//             status:"success",
//             message:"Request fetched Successfully",
//             SingleRequest
//         });
//     } catch (error) {
//         res.status(400).json({
//             status:"Fail",
//             message:`Error: ${error.message}`
//         });
//     }
// }
