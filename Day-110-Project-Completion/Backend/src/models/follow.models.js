import { mongoose } from "mongoose"


const followSchema = new mongoose.Schema({
    follower:{
        type:String
    },
    followee:{
        type:String
    }
},{timestamps:true}) 


export const followModel = mongoose.model('follows',followSchema)
