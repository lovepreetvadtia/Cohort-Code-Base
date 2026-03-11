const jwt = require('jsonwebtoken')
const imagekit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs');
const postModel = require('../models/post.models');
const ImageKit = new imagekit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY']});


async function CreatePostController(req,res) {

const file  =  await ImageKit.files.upload({
  file: await toFile(Buffer.from(Buffer.from(req.file.buffer)), 'file'),
  fileName: 'fileName',
  folder:"Insta-Clone",
  user:req.user._id
});

console.log(file)


const post = await postModel.create({
    caption:req.body.caption,
    ImgUrl:file.url,
    user:req.user._id
})


res.status(201).json({
    message:"Post Created Sucessfully",
    post
})
}

async function getPostsController(req,res) {
    const posts = await postModel.findOne()
}


module.exports= {CreatePostController,getPostsController}