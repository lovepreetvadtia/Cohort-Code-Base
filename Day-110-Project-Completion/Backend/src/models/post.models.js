const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:String,
    imgUrl:{
        type:String,
        required:[true,"Post Url Is Required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,'User Is Required to Create Post']
    }
},{timestamps:true})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel