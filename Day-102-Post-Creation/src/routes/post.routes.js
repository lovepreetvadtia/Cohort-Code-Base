// const postModel = require('../models/post.model')
// const express = require('express')
// const postRouter = express.Router()
// const multer = require('multer')
// const upload = multer({storage:multer.memoryStorage()})

// postRouter.post('/',upload.single('image'),(req,res)=>{

//    console.log(req.body,req.file)

// })

// module.exports = postRouter














const express = require('express')
const postModel = require('../models/post.model')
const postRouter = express.Router()
const multer =require('multer')
const upload = multer({storage:multer.memoryStorage()})
const createPostController = require('../controllers/post.controllers')


postRouter.post('/',upload.single('file'),createPostController)

module.exports = postRouter