const express = require('express')
let app  = express();

app.listen(3000)

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('This is About Page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact With Me')
})

