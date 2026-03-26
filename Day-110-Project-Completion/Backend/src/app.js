require('dotenv').config()
const express = require('express')
const app = express()
const cookie = require('cookie-parser')
const cors = require('cors')


app.use(express.json())
app.use(cookie())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

// Require Routers
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

// Use Routers
app.use('/api/auth/',authRouter)
app.use('/api/',postRouter)
app.use('/api/',userRouter)

module.exports = app