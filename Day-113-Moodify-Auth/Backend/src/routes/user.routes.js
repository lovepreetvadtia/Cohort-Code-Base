import express from 'express'
import {registerController,loginController} from '../controllers/auth.controllers.js'
export const AuthRouter = express.Router()

AuthRouter.post('/register',registerController)
AuthRouter.post('/login',loginController)
