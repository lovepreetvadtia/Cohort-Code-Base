const userModel = require("../models/user.models")
const jwt  = require('jsonwebtoken')

async function indentifyUser(req,res,next) {


    // Checking Token Valid or not
    const token = req.cookies.token

    if(!token){
        return res.status(409).json({
            message:"User Not Authorised"
        })}


    let  decoded
    let  user

    // Checking User Authorised or Not
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
        user  = await userModel.findById(decoded.id).select('-password')
    } catch (error) {
        if(error){
            return res.status(409).json({
                message:"Invalid Token",
                error
            })}}

    req.user = user


    next()
}

module.exports = indentifyUser