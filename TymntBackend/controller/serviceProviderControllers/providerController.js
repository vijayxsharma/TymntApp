import serviceProvider from "../../Model/serviceProvider.js";
import User from "../../Model/user.js";

export const createProviderController = async(req, res)=>{
    try {
        console.log("provider api clicking..")
        const userId = req.userId;
        const {bio, tagLine} = req.body;
        const isExistProvider = await serviceProvider.findOne({
            user_id:userId
        })
        if(isExistProvider){
            return res.status(403).json({
                   status:"Fail",
                   message:"Provider profile already Exist"
                }
            );
        }
        const provider = await serviceProvider.create({
            user_id:userId,
            tagLine,
            bio
        })
        await User.findByIdAndUpdate(
            userId,
            {
                isProviderProfileCompleted:true
            }
        );
        res.status(201).json({
            success:true,
            provider
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:`Error: ${error.message}`
        });
    }
}

export const getSingleProviderController = async(req,res)=>{
    try {
        const user_id = req.params.id;
        console.log(user_id)
        const provider = await serviceProvider.find({user_id})
        console.log(provider)
        if(provider == null){
            return res.status(404).json({
                status:"Fail",
                message:"Provider not found"
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Successfully get the provider",
            provider:provider
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error}`
        })
    }
}