const dotenv = require('dotenv')
const mongoose = require("mongoose")


const connectToDB = ()=>{
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(()=>{
        console.log('Connected To DB')
    })
}

module.exports= connectToDB