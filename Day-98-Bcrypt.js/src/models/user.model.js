const mongoose  = require('mongoose')

const UserSchema  = new mongoose.Schema({
    email:{unique:[true,'Email Already Exist'],
        type:String
    },
    username:{
        unique:[true,'Username Already Exist'],
        type:String
    },
    password:String
})

const userModel  = mongoose.model('Allusers',UserSchema)

module.exports = userModel