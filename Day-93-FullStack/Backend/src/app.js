// Main Work Of This file is creating the server
const noteModel = require('./models/note.model')
const express = require('express')
const cors = require('cors')
const app =  express()
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
/* 
POST/api/notes
*/

app.post('/api/notes',async (req,res)=>{
    const {title,description} =req.body
    const note= await noteModel.create({title,description})

    res.status(201).json({
        message:'Note Created Successfully',note
    })
})

/* 
GET/api/notes
Get All the Notes
*/

app.get('/api/notes',async (req,res)=>{
    const Note =await noteModel.find()
    res.status(200).json({
        message:"Notes Fetched",Note
    })
})

/* 
DELETE/api/notes/:id
*/
app.delete('/api/notes/:id',async (req,res)=>{
const id = req.params.id
await noteModel.findByIdAndDelete(id)

res.status(200).json({
    message:"Notes Deleted Successfully",id
})
})

/* 
PATCH/api/notes
Update the Title
*/
app.patch('/api/notes/:id',async(req,res)=>{
    const {title,description} =req.body
    const id = req.params.id
    await noteModel.findByIdAndUpdate(id,{title,description})
    res.status(200).json({
        message:"Note Updated Successfully",id
    })
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app