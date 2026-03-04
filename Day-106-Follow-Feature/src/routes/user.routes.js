const express = require('express')
const identifyUser = require('../middleware/auth.middleware')
const controller = require('../controllers/follow.controller')

const userRouter = express.Router()


/*
@routes follow and follwing
*/ 

userRouter.post('/follow/:username',identifyUser,controller.followController)
userRouter.post('/unfollow/:username',identifyUser,controller.unfollowController)
userRouter.post('/like/:postId',identifyUser,controller.likeController)


module.exports = userRouter
