
const dotenv= require('dotenv')
const mongoose = require('mongoose')

const  ConnectToDB= ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    })
    console.log('Connected To DB')
}

module.exports = ConnectToDB