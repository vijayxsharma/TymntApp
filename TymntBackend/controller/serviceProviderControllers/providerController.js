import serviceProvider from "../../Model/serviceProvider";

export const createProviderProfile = async(req, res)=>{
    try {
        const userId = req.user._id;
        const {bio, tagLine} = req.body;
        const isExistProvider = await serviceProvider.findOne({
            user_id:userId
        })
        if(isExistProvider){
            return res.status(400).json(
                {
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
                provider_profile_completed=true
            }
        );
        res.status(201).json({
            success:true,
            provider
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
}