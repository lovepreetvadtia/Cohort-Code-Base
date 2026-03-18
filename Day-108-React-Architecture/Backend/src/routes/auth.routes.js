const express = require('express')
const controllers = require('../controllers/auth.controllers')
const authRouter = express.Router()
const indentifyUser = require('../middlewares/auth.middleware')


// POST :- api/auth/register
authRouter.post('/register',controllers.registerController)
authRouter.post('/login',controllers.loginController)
authRouter.get('/get-me',indentifyUser,controllers.getmeController)


module.exports = authRouter