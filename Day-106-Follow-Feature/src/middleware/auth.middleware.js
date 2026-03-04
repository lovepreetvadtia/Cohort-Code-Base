const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

async function identifyUser(req,res,next) {
    const token  = req.cookies.token
    
        if(!token){
            return res.status(401).json({
                message:"Unauthorised User"
            })
        }
    
        let decoded;
        let user
        
        try {
            decoded = jwt.verify(token,process.env.JWT_SECRET)
            user  = await userModel.findById(decoded.id).select('-password')
        } catch (error) {
           return res.status(401).json({
                message:"Invalid Token"
            })
        }

        
        req.user = user
        console.log(req.user)

        // console.log(req.user)

        next()
    
}


module.exports = identifyUser