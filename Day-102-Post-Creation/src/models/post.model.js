// const mongoose = require('mongoose')

// const postSchema = new mongoose.Schema({
//     caption:{
//         type:String,
//         default:""
//     },
//     imageURL:{
//         type:String,
//         required:[true,"imageURL is required"]
//     },
//     createdAt:String,
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'users',
//         required:[true,'ObjectId Is Required to Creating Post']
//     }
// })

// const postModel = mongoose.model('posts',postSchema)

// module.exports= postModel



const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        required:[true,'Image is Required to Create Post']
    },
    createdAt:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,'ObjectId Is Required To Create Post']
    }
})

const postModel = mongoose.model('posts',postSchema)

module.exports = postModel