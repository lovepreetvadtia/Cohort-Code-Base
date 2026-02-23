const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'Username Already Exists'],
        required:[true,"Username Is required"]
    },
    email:{
        type:String,
        unique:[true,'Email Already Exists'],
        required:[true,"Email Is required"]
    },
    bio:String,
    profileImg:{
        type:String,
        default:'https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp'
    },
    password:String
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel
