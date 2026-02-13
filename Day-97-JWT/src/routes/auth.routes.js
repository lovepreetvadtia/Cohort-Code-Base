const express = require('express')
const mongoose = require('mongoose')
const userModel = require('../models/user.model')
const authRouter = express.Router()
const jwt= require('jsonwebtoken')
const env = require('dotenv')
const cookie = require('cookie-parser')

authRouter.post('/register', async (req,res)=>{

    const {username,email,password}= req.body

    const isEmailExist = await userModel.findOne({email})

    if(isEmailExist){
        return res.status(409).json({
            messege:"Email Exists"
        })
    }
    const isUserExist = await userModel.findOne({username})

    if(isUserExist){
        return res.status(409).json({
            messege:"Username Exists"
        })
    }

    const user =await userModel.create({
        username,email,password
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
)

res.cookie("jwt_token",token)
    res.status(201).json({
        messege:"User Generated",user,token
    })
})


module.exports = authRouter