const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')


const registerController = async (req,res)=>{

    const {username,email,bio,profileImg,password} = req.body

const isUserExist = await userModel.findOne({
    $or:[{email},{username}]
})

if(!email){
    return res.status(404).json({
        message:"Email is Required"
    })
}

if(!username){
    return res.status(404).json({
        message:"Username Is Required"
    })
}

// Check User Exists Or Not

if(isUserExist){
    return res.status(401).json({
        message:"User Already Exist"
    })
}

// Password Hashing

const hash = await bcrypt.hash(password,10)  


    const user = await userModel.create({
        username,email,bio,profileImg,password:hash
    })

    // Generating A Token

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

res.status(201).json({
    message:"User Registered Successfully",
    user
})

}


const logInController = async (req,res)=>{
    const {email,username,password} = req.body

    const user = await userModel.findOne({
        $or:[{email},{username}]
    })

    if(!user){
        return res.status(404).json({
            message:"Invalid Username or Email"
        })
    }

    const pass= await bcrypt.compare(password,user.password)

    if(!pass){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"User Logged In Successfully"
    })
}

module.exports = {registerController,logInController}