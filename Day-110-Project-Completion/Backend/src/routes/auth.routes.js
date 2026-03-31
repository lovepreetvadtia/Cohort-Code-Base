import express from 'express'
import {registerController,loginController,getmeController} from '../controllers/auth.controllers.js'
import {identifyUser} from '../middlewares/auth.middleware.js'
export const authRouter = express.Router()


// POST :- api/auth/register
authRouter.post('/register',registerController)
authRouter.post('/login',loginController)
authRouter.get('/get-me',identifyUser,getmeController)