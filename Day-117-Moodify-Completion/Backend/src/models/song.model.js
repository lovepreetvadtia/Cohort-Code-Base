import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    songUrl:{
        type:String,
        required:true
    },
    posterUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})

export const songModel = mongoose.model('songs',SongSchema)