const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    postId:{
        ref:"posts",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"post id is required"]
    }, 
    likedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }},{timestamps:true})

    // likeSchema.index({postId:1,likedBy:1},{unique:true})


    const likeModel = mongoose.model('likes',likeSchema)

    module.exports = likeModel