const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    unique:[true,'Username Already Exists'],
    required:[true,'Username Is Required']
} ,
email:{
    type:String,
    unique:[true,'Email Already Exists'],
    required:[true,'Email Is Required']
  },

  password:String,

  bio:String,
  
  profileImage:{
    type:String,
    default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp"
  }
})

const UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel
