const jwt = require("jsonwebtoken");

async function identifyUser(req,res,next) {
    const token  = req.cookies.token
    
        if(!token){
            return res.status(401).json({
                message:"Unauthorised User"
            })
        }
    
        let decoded;
        
        try {
            decoded = jwt.verify(token,process.env.JWT_SECRET)
        } catch (error) {
           return res.status(401).json({
                message:"Invalid Token"
            })
        }


        decoded =req.user

        next()
    
}


module.exports = identifyUser