import { generateToken } from "../../middleware/jwtTokenGenerator.js";
import User from "../../Model/user.js";

export const signupController = async (req, res)=>{
    try {
        const {name, phone, email, password} = req.body;
        if(!name || !phone || !email || !password){
            return res.status(400).json({
            status:"Fail",
            message:`All fields are required`
            })
            console.log("All fields are required")
        }
        const isExist =  await User.findOne({email})
        if(isExist){
            return res.status(400).json({
            status:"Fail",
            message:`user already exist`
        })
        console.log("User already exist")
        }
        const user = await User.create({name,phone,email,password})
        if(user){
            const token = generateToken(user)
            console.log(token)
            res.cookie("token", token);
        }
        console.log("Sign up SuccessFully..")
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
        console.log(`Error in Sign Up : ${error}`)
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
            
        const token = generateToken(isExist)
        console.log(token)
        res.cookie("token", token);
        
        
        res.status(200).json({
            status:"success",
            message:"User Sign in Successfully",
            user:isExist,
            token:token
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: `Error: ${error.message}` 
        });
    }
}