const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'Username Already Exist']
    },
    email:{
        type:String,
        unique:[true,'Email Already Exists']
    },
    password:String
})

const userModel = mongoose.model('Allusers',userSchema)

module.exports = userModel