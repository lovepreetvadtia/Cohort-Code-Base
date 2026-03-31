import { mongoose } from "mongoose"

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

likeSchema.index({ post: 1, user: 1 }, { unique: true });

export const likeModel = mongoose.model('likes',likeSchema)



