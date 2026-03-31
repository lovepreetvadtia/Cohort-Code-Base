import express from 'express'
import {identifyUser} from  '../middlewares/auth.middleware.js'
import {followController,unfollowController,likeController,unlikeController,getFollows} from '../controllers/user.controller.js'
export const userRouter = express.Router()



// POST api/post
userRouter.post('/users/follow/:id',identifyUser,followController)
userRouter.post('/users/unfollow/:id',identifyUser,unfollowController)
userRouter.post('/users/like/:id',identifyUser,likeController)
userRouter.post('/users/unlike/:id',identifyUser,unlikeController)
userRouter.get('/followers',identifyUser,getFollows)

