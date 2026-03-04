const express = require('express')
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user.routes')


const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth/',authRouter)
app.use('/api/',     postRouter)
app.use('/api/users',userRouter)


module.exports = app
