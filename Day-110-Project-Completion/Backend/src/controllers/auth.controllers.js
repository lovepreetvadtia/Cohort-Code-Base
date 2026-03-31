import {userModel} from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'

// POST :- api/auth/register
export async function registerController(req,res) {
    const {email,username,password,bio,profileImg} = req.body

    if(!email){
        return res.status(400).json({
            message:"Email Is Required"
        })}

    if(!username){
        return res.status(400).json({
            message:"Username Is Required"
        })}


    // Checking that user Already exist or not
    const isUserExist =await userModel.findOne({
        $or:[
            {username},
            {email}
        ]}) 


    if(isUserExist){
        return res.status(409).json({
            message:"User Already Exist"
        })}
    
    //Password Hashing with bcryptjs  
     const hash = await bcrypt.hash(password,10)   

    const user= await userModel.create({
        email,username,profileImg,bio,password:hash
    })

    // Generate JWT Token  
    const token  = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    //Store Token in cookies 
    res.cookie("token",token)

    res.status(201).json({
        message:"User Created Successfully",
        email:user.email,
        username:user.username,
        bio:user.bio,
        profileImg:user.profileImg
    })
    }

// POST :- api/auth/login
export async function loginController(req,res) {
    const {email,username,password}= req.body

    const user= await userModel.findOne({
        $or:[
            {email},{username}
        ]}).select('+password')

    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })}

    const isPassValid = await bcrypt.compare(password,user.password)   

    if(!isPassValid){
        return res.status(409).json({
            message:"Invalid Password"
        })
    }

    const token  = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(200).json({
        message:"User Sucessfully LoggedIn",
        email:user.email,
        username:user.username,
        profileImg:user.profileImg

    })
}

// GET :- api/auth/get-me
export async function getmeController(req,res) {
    const userId = req.user.id

    const user  = await userModel.findById(userId)

    console.log(user)

    return res.status(200).json({
        username:user.username,
        email:user.email,
        profileImg:user.profileImg

    })
}


