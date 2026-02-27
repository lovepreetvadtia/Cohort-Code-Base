const express = require('express')
const Controller = require('../controllers/post.Controllers')
const postRouter = express.Router()
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})

postRouter.post('/post',upload.single('file'),Controller.CreatePostController)
postRouter.get('/posts',Controller.getPostController)
postRouter.get('/post/:id',Controller.getPostDetailsController)


module.exports = postRouter