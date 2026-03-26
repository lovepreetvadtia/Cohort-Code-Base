const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
 post:{
    ref:"posts",
    type:mongoose.Schema.Types.ObjectId,
    required:[true,"PostId is Required"]},

    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId
    }   
},{timestamps:true})

const likeModel = mongoose.model('likes',likeSchema)


module.exports = likeModel