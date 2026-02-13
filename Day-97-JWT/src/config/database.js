const env = require('dotenv')
const mongoose = require('mongoose')

const ConnectToDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(res=>{
        console.log('DB CONNECTED')
    })
}

module.exports = ConnectToDB