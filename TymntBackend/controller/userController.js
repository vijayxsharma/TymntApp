import User from "../Model/user.js";

export const profileController = async (req, res)=>{
    try {
        const email = req.email;
        let userExist = await User.findOne({email});
        if(userExist)
        res.status(200).json({
            status:"success",
            message:"profile page",
            user:userExist
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error}`
        })
    }
}