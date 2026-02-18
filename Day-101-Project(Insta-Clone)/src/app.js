const express = require('express')
const app = express()
app.use(express.json())
const UserModel = require('./models/user.model')
const authRouter = require('./routes/auth.routes')
app.use('/api/auth',authRouter)



module.exports=app