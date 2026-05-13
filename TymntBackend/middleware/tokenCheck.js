import jwt from "jsonwebtoken"
export const tokenChecker = (req, res, next)=>{
    try {
        if("cookie" in req.headers){
            let token = req.headers.cookie.split("=")[1];
            let decode = jwt.verify(token,process.env.SECRET_KEY);
            console.log(decode);
            req.email = decode.email;
            next();
        }else{
            res.status(400).json({
            status:"Fail",
            message:`Error: Token not found`
            })
        }
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:`Error: ${error}`
        })
    }
}