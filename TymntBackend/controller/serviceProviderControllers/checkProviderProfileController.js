import User from "../../Model/user.js";

export const checkProviderProfileController = async (req, res)=>{
    try {
        const email = req.email;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({
                    status: "Fail",
                    isProviderProfileCompleted:false,
                    message: "User not found",
            });
        }
        res.status(200).json({
            status:"Success",
            isProviderProfileCompleted:user.isProviderProfileCompleted,
        })
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            message:`Error: ${error.message}`
        });
    }
}