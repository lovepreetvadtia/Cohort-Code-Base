const userModel = require('../models/user.model')
const express= require('express')
const authRouter = express.Router()
const jwt  = require('jsonwebtoken')
const cookie = require('cookie-parser')
const env = require("dotenv")
const crypto = require('crypto')

// api/auth/register

authRouter.post('/register',async (req,res)=>{

    const {email,username,password}= req.body

    const isEmailExist =await userModel.findOne({email})
    if(isEmailExist){
        return res.status(409).json({
            messege:"Email Already Exist"
    })}

    const isUsernameExist =await userModel.findOne({username})

    if(isUsernameExist){
        return res.status(409).json({
            messege:"Username Already Exist"
    })}
    
    const hash = crypto.createHash('md5').update(password).digest('hex')

    const user =await userModel.create({
        email,username,password:hash
    })


    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('jwt_token',token)

    res.status(201).json({
        messege:"User Registered",user,token
    })

})


authRouter.post('/login', async(req,res)=>{
    const {email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            messege:"Mail Not Registered"
        })}
    
    const passMatch = user.password===crypto.createHash('md5').update(password).digest('hex')

    if(!passMatch){
        return res.status(401).json({
            messege:"Wrong Password, Please Try Again"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('jwt_token',token)

    res.status(200).json({
        messege:"User Logged In Successfully",user,token
    })

})

module.exports = authRouter

