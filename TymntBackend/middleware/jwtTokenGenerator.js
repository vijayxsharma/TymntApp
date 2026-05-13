import jwt from "jsonwebtoken"
export const generateToken = (user)=>{
    let token = jwt.sign({email: user.email}, process.env.SECRET_KEY, {expiresIn:"5d"} );
    return token;
}