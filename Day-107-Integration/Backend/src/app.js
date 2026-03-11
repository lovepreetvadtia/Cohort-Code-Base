require('dotenv').config()
const express = require('express')
const app = express()
const cookie = require('cookie-parser')


app.use(express.json())
app.use(cookie())

// Require Routers
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')

// Use Routers
app.use('/api/auth/',authRouter)
app.use('/api/',postRouter)

module.exports = app