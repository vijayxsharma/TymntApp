import User from "../Model/user.js";

export const signupController = async (req, res)=>{
    try {
        const {name, phone, email, password} = req.body;
        if(!name || !phone || !email){
            return res.status(400).json({
            status:"Fail",
            message:`All fields are required`
            })
        }
        let isExist =  await User.findOne({email})
        if(isExist){
            return res.status(400).json({
            status:"Fail",
            message:`user already exist`
        })
        }
        const user = await User.create({name,phone,email,password})
        res.status(200).json({
            status:"success",
            message:"User Sign up Successfully",
            data:user

        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error}`
        })
    }
}

export const signInController = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const isExist = await User.findOne({email})
        if(!isExist){
            return res.status(400).json({
            status:"Fail",
            message:`user not found`
            })
        }
        if(password !==isExist.password){
            return res.status(400).json({
            status:"Fail",
            message:`email or password is incorrect`
            })
        }
        res.status(200).json({
            status:"success",
            message:"User Sign in Successfully",
            data:isExist
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: `Error: ${error.message}` 
        });
    }
}