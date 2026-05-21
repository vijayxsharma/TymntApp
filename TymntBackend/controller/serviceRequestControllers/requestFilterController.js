import serviceRequests from "../../Model/service_requests.js";

export const requestFilterController = async(req,res)=>{
    try {
        const {category, search} = req.query;
        // console.log('Data Filtering..')
        let filter = {};
        if(category){
            filter.category = {
            $regex: category,
            $options:"i"
            };
        }
        if(search){
            filter.description = {
                $regex: search,
                $options: "i"
            };
        }

        const request = await serviceRequests
        .find(filter)
        .populate("consumer_id")
        .sort({createdAt:-1});
        res.status(200).json({
            status: "success",
            request
        })
        // console.log(request)
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        });
    }
}