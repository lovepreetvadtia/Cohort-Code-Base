const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const cookie = require('cookie-parser')

app.use(express.json())
app.use(cookie())
app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)

module.exports = app