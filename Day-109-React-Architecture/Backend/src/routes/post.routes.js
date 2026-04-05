const express = require('express')
const postRouter = express.Router()
const controllers = require('../controllers/post.controller')
const indentifyUser = require('../middlewares/auth.middleware')
const multer = require('multer')
const upload = multer({multer:multer.memoryStorage()})


// POST api/post
postRouter.post('/post',upload.single('file'),indentifyUser,controllers.CreatePostController)
postRouter.get('/posts',indentifyUser,controllers.getPostsController)
postRouter.get('/post/:id',indentifyUser,controllers.getPostDetailsController)
postRouter.get('/all-posts',indentifyUser,controllers.getAllPost)

module.exports = postRouter