const express = require('express')
const authRouter = express.Router()
const controller = require('../controllers/auth.controllers')


// POST

// >> Register
authRouter.post('/register',controller.registerController )

// >> Login
authRouter.post('/login', controller.loginController )


module.exports = authRouter