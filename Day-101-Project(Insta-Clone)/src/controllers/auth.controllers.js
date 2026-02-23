const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cookie = require('cookie-parser')
const UserModel = require('../models/user.model')


// Register
async function registerController(req,res){
    const {username,email,password,bio,profileImage} = req.body
    
    const ifUserExist = await UserModel.findOne({
        $or:[{email},{username}]
    })
    
    if(ifUserExist){
        return res.status(409).json({
            message:"User Already Exists" + (ifUserExist.email==email?"Email Already Exists":'Username Already Exists')
        })}
        
        const hash = await bcrypt.hash(password,10)

        const user = await UserModel.create({
        username,email,password:hash,bio,profileImage
    })
    
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("jwt_token",token)
    
    res.status(201).json({
        message:"User Registered Successfully",
        mail:user.email,
        username:user.username
    })}

// Login

async function loginController(req,res){
    const {email,username,password} = req.body
    
    const user = await UserModel.findOne({
        $or:[{email},{username}]
    })

    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })}
    
   const isPasswordValid = await bcrypt.compare(password,user.password)

   if(!isPasswordValid){
    return res.status(401).json({
        message:"Password Not Valid"
    })}

    const token = jwt.sign({
        id:user._id
},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie('jwt_token',token)

    res.status(200).json({
        message:"User Logged In Successfully",
        mail:user.email,
        username:user.username
    })
}

module.exports = {registerController,loginController}