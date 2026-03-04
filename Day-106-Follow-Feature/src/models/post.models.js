const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:[true,'Image Is Required to Create An Post']
    },
    caption:{
        type:String,
        default:""
    },
    createdAt:String,
    user:{
        ref:"users",
        required:[true,'userid Is required'],
        type:mongoose.Schema.Types.ObjectId
    }
})

const postModel = mongoose.model('posts',postSchema)

module.exports = postModel