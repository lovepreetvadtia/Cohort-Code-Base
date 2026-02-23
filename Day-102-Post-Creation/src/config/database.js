const mongoose = require('mongoose')

const ConnectToDB= async()=>{
await mongoose.connect(process.env.MONGO_URI)

console.log("DB Connected")
}

module.exports = ConnectToDB