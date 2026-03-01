const express = require('express')
const controllers = require('../controllers/auth.controllers')
const authRouter = express.Router()



// POST|api/auth/register
authRouter.post('/register',controllers.registerController)
authRouter.post('/login',controllers.LoginController)


module.exports = authRouter