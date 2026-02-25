const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username iS Required"],
        unique:true
    },

    email:{
        required:[true,'Email Is Required'],
        type:String,
        unique:true
    },
    profileImg:{
        type:String,
        default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp"
    },
    password:{
        required:[true,'Password Is Required'],
        type:String
    }
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel