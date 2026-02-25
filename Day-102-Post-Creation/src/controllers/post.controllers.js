const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')
// const multer =require('multer')
// const upload = multer({storage:multer.memoryStorage()})
const postModel = require('../models/post.model')
const jwt = require('jsonwebtoken')

const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
}) 



async function createPostController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token Not Prvoided or Unauthorised Access"
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message:"User Not Authorised"
        })
    }

    console.log(decoded)


    const file = await imagekit.files.upload({
  file: await toFile(Buffer.from(req.file.buffer), 'file'),
  fileName: 'file',
  folder:"Insta-Clone"
})

const post = await postModel.create({
    caption:req.body.caption,
    imageUrl:file.url,
    user:decoded.id
})

res.status(201).json({
    message:"Post Created Successfully",
    post
})
    // console.log(req.file,req.body)
}

module.exports= createPostController