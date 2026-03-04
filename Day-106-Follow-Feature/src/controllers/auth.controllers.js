const bcrypt = require('bcryptjs')
const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

// Register Controller

async function registerController(req,res){
    
try {
    

const {email,username,password,bio,profileImg} = req.body

// Check By Username or email, User exist or not

    const isUserExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    if(!email){return res.status(404).json('Email is Required')}
    if(!username){return res.status(404).json('Username is Required')}

    if(isUserExist){
        return res.status(409).json({
            message:"User Already Exist"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        email,username,password:hash
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(201).json({
        message:"User Created Successfully",
        user
    })} 
 
 catch (error) {
 return res.status(500).json({
    message:"Internal Server Error"
    })   
  }   

}

// LoginController

async function LoginController(req,res) {

try {
    

    const {email,username,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    // Check The User Existence
    if(!user){
        return res.status(404).json({
            message:"Invalid Username Or Email"
        })
    }

    const isValidPass = await bcrypt.compare(password,user.password)

    if(!isValidPass){
        return res.status(401).json({
            message:"Password is Not Valid"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(200).json({
        message:"User Succesfully LoggedIn",
        id:user._id,
        username:user.username,
        email:user.email
    })} 
    
    catch (error) {
    return res.status(500).json({
        message:"Internal Server Error"
    })
}
}

module.exports = {registerController,LoginController}