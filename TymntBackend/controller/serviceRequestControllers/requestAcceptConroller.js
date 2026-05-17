export const requestAcceptController = (req,res)=>{
    console.log("request Accept path is clear....")
    try {
        res.status(200).json({
            status:"Success",
            message:"request accepted",
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"request not accepted",
        })
    }
}