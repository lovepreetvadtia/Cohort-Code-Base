const express = require('express')

const app = express();

app.listen(3000,()=>{
    console.log('server Running At Port 3000')
})

app.use(express.json())

let notes = []

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.send('Notes Created')

})

app.get('/notes',(req,res)=>{
    res.send(notes)
})