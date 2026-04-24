import express from "express"
import { uploadSong } from "../controllers/song.controller.js"
import { upload } from "../middlewares/upload.middleware.js"

export const songRouter = express.Router()


// POST / api/song
songRouter.post('/',upload.single('song'),uploadSong)