const express = require('express')
const authRouter = express.Router()
const controller = require('../controllers/auth.controllers')



// Register:- api/auth/register

authRouter.post('/register',controller.registerController)

authRouter.post('/signIn',controller.logInController)

module.exports= authRouter