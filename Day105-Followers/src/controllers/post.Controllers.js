const postModel = require('../models/post.model')
const jwt = require('jsonwebtoken')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
const { post } = require('../app')

const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function CreatePostController(req,res){

    try {
        
    const token  = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorised User"
        })
    }

    let decoded;
    
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
       return res.status(401).json({
            message:"Invalid Token"
        })
    }

    const file = await imagekit.files.upload({
  file: await toFile(Buffer.from(req.file.buffer), 'file'),
  fileName: 'file',
  folder:"Insta-Clone"
})

console.log(file)
    
const post  = await postModel.create({
    caption:req.body.caption,
    imageUrl:file.url,
    user:decoded.id
})    

res.status(201).json({
    message:"Post Created Sucessfully",post
})

} catch (error) {
    console.log("FULL ERROR:", error)
    return res.status(500).json({
        message:"Internal Server Error",
        error:error.message
    })
}

}



async function getPostController(req,res) {
    
const token  = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorised User"
        })
    }

    let decoded;
    
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
       return res.status(401).json({
            message:"Invalid Token"
        })
    }

    const userId = decoded.id

    const posts = await postModel.find({
        user:userId
    })

    res.status(200).json({
        message:"Post Fetched Successfully",
        posts
    })

}

// async function getPostDetailsController(params) {

//     const token =req.cookies.token

//     if(!token){
//         return res.status(401).json({
//             message:"UnAuthorised User"
//         })
//     }

//         let decoded;

//         try {
//             decoded = jwt.verify(token,process.env.JWT_SECRET)
//         } catch (error) {
//             return res.status(404).json({
//                 message:"Ivalid Token"
//             })
//         }

//     const userId = decoded.id
//     const postId = req.params.postId

//     const post = await postModel.findOne({userId})

//     if(!post){
//         return res.status(404).json({
//             message:"Post Not Found"
//         })
//     }

//     const isValidUser = post.user.toString()==userId

//     if(!isValidUser){
//         return res.status(404).json({
//             message:"Forbidden Content"
//         })
//     }

//     res.status(200).json({
//         message:"Post Details Fetched Sucessfully"
//     })

// }

async function getPostDetailsController(req,res) {
    const token  = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"UnAuthorised Access"
        })}
    
    let decoded;

    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })}
    
    const userId = decoded.id
    const postId = req.params.id

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:'Post Not Found'
        })}
    
    const isValidUser = post.user.toString() ==userId

    if(!isValidUser){
        return res.status(401).json({
            message:"For Bidden Content"
        })}


    res.status(200).json({
        message:"Post Fetched Successfully",post
    })    

}

module.exports = {CreatePostController,getPostController,getPostDetailsController}