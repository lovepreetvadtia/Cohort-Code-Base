import { mongoose } from "mongoose"

export const userSchema = new mongoose.Schema({
    email:{
        required:[true,"Email Is Required"],
        unique:true,
        type:String
    },
    username:{
        required:[true,'Username is Required'],
        unique:true,
        type:String
    },
    password:{
        type:String,
        required:[true,'Password Is Required'],
        select:false
    },
    bio:String,
    profileImg:{
        default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
        type:String
    }})

export const userModel = mongoose.model('users',userSchema)

