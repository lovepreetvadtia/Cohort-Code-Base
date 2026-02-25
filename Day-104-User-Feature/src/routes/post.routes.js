const express = require('express')
const CreatePostController = require('../controllers/post.Controllers')
const postRouter = express.Router()
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})

postRouter.post('/posts',upload.single('file'),CreatePostController)



module.exports = postRouter