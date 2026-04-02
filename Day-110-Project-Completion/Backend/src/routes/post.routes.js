import express from "express";
import {CreatePostController,getPostsController,getPostDetailsController,getAllPost} from '../controllers/post.controller.js'
import { identifyUser } from '../middlewares/auth.middleware.js'
import multer from 'multer'
const upload = multer({multer:multer.memoryStorage()})
export const postRouter = express.Router()


// POST api/post
postRouter.post('/post',upload.single('file'),identifyUser,CreatePostController)
postRouter.get('/posts',identifyUser,getPostsController)
postRouter.get('/post/:id',identifyUser,getPostDetailsController)
postRouter.get('/all-posts',identifyUser,getAllPost)

