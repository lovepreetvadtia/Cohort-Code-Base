const express = require('express')
const app = express();
app.use(express.json())
const noteModle = require('./models/note.model');
const { default: mongoose } = require('mongoose');


app.post('/notes',async(req,res)=>{
const {title,description}= req.body
const note = await noteModle.create({
    title,description
})

res.status(200).json({
    massage:'Note Created',note
})
})


module.exports = app
