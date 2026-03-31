import dotenv from "dotenv";
dotenv.config();
import ImageKit from '@imagekit/nodejs';
import { toFile } from "@imagekit/nodejs"
import { postModel } from "../models/post.models.js"
import { likeModel } from "../models/like.model.js"

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY']
});


export async function CreatePostController(req,res) {

const file  =  await client.files.upload({
  file: await toFile(Buffer.from(Buffer.from(req.file.buffer)), 'file'),
  fileName: 'fileName',
  folder:"Insta-Clone",
  user:req.user._id
});


const post = await postModel.create({
    caption:req.body.caption,
    imgUrl:file.url,
    user:req.user._id
})


res.status(201).json({
    message:"Post Created Sucessfully",
    post
})
}

export async function getPostsController(req,res) {


  const userId = req.user.id


  const posts = await postModel.find({user:userId})

  console.log(userId,posts)

  res.status(200).json({
    message:"Post Fetched Sucessfully",
    posts
  })
}


export async function getPostDetailsController(req,res){
  const postid = req.params.id

  const post = await postModel.findById(postid)

  console.log(post)

  if(!post){
    return res.status(404).json({
      message:"Post Not Found"
    })}

  res.status(200).json({
    message:"Post Fetched Sucessfully",post
  })
}

export async function getAllPost(req,res){
  const user = req.user
const posts =await  Promise.all(((await postModel.find().populate('user').lean()).reverse())
.map(async (post)=>{
  const isLiked = await likeModel.findOne({
    user:user._id,
    post:post._id
  })
  post.isLiked = Boolean(isLiked)

  return post
}))


  console.log(posts)

  res.status(200).json({
    message:"Post Fetched Sucessfully",
    posts
  })
}