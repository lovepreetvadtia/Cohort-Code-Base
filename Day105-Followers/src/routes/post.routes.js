const express = require('express')
const Controller = require('../controllers/post.Controllers')
const postRouter = express.Router()
const multer = require('multer')
const identifyUser = require('../middleware/auth.middleware')
const upload = multer({storage:multer.memoryStorage()})


postRouter.post('/post',upload.single('file'),identifyUser,Controller.CreatePostController)
postRouter.get('/posts',identifyUser,Controller.getPostController)
postRouter.get('/post/:id',identifyUser,Controller.getPostDetailsController)


module.exports = postRouter