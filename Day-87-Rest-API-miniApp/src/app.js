const express = require('express')

const app = express()

app.use(express.json())


// GET Method

app.get('/',(req,res)=>{
    res.send("Ehllow WOrld")
})

const notes= []

// POST Method 
 
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.send('Notes Created Successfuly')
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index]= req.body
    res.send('Notes Updated')
})

app.delete('/notes/:index',(req,res)=>{
   delete notes[req.params.index]
   res.send(`Notes No.${req.params.index} is deleted Successfully`)
})



module.exports= app
