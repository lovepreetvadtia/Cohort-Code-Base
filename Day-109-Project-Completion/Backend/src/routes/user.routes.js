const express = require('express')
const userRouter = express.Router()
const indentifyUser = require('../middlewares/auth.middleware')
const controllers = require('../controllers/user.controller')



// POST api/post
userRouter.post('/users/follow/:id',indentifyUser,controllers.followController)
userRouter.post('/users/unfollow/:id',indentifyUser,controllers.unfollowController)
userRouter.post('/users/like/:id',indentifyUser,controllers.likeController)
userRouter.post('/users/unlike/:id',indentifyUser,controllers.unlikeController)

module.exports = userRouter