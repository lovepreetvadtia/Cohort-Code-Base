const express=require('express')
const app = express()
const NotesModel = require('./models/notes.models')

app.use(express.json())

// POST/notes

app.post('/notes',async (req,res)=>{
    
    const {title,description} = req.body

    const note =await NotesModel.create({
        title,description})
        
        res.status(201).json({
        massage:"Notes Created Successfully",note})
    })
    
    // GET/notes
    app.get('/notes',async (req,res)=>{
        const notes = await NotesModel.find()
        res.status(200).json({
            massage:"Notes Fetched",notes
        })
    })


module.exports = app