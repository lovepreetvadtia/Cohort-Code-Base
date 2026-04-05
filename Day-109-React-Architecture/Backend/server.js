require('dotenv').config()
const app  = require('./src/app')
const ConnectToDB = require('./src/config/database')

ConnectToDB()

app.listen(3000,()=>{
    console.log("Server Is Running On Port 3000")
})
