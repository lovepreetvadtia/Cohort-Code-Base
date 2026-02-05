// Main Work of This File is Start the server
require('dotenv').config()
const connectToDB = require('./src/config/database')
const app= require('./src/app')


connectToDB()
app.listen(3000,()=>{
console.log("Server Is Running on Port 3000")
})

