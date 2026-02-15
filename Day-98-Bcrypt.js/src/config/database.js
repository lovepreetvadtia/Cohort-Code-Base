const mongoose = require('mongoose')
const env  = require('dotenv')

const ConnectToDB= ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(res=>{
        console.log('DB Connected')
    })
}

module.exports = ConnectToDB
