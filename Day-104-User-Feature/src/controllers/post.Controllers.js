const postModel = require('../models/post.model')
const jwt = require('jsonwebtoken')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')

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
     return res.status(500).json({
        message:"Internal Server Error"
     })   
    }

}

async function getPostController(req,res) {
    
}

module.exports = CreatePostController