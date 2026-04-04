import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Routers
import { authRouter } from './routes/auth.routes.js'
import { postRouter } from './routes/post.routes.js'
import { userRouter } from './routes/user.routes.js'

export const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "https://insta-clone-front-zeta.vercel.app"
}))

// Routes
app.use('/api/auth', authRouter)
app.use('/api', postRouter)
app.use('/api', userRouter)