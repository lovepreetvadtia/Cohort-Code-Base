import mongoose from "mongoose";

const blackListSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token Is Required to Logout user"]
    }
},
{timestamps:true})

export const blackListModel = mongoose.model('blacklist',blackListSchema)
