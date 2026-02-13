const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const cookie = require('cookie-parser')


app.use(express.json())
app.use('/api/auth',authRouter)
app.use(cookie())
module.exports = app