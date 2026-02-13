require('dotenv').config()
const app =  require('./src/app')
const ConnectToDB = require('./src/config/database')

app.listen(3000,()=>{
    console.log('Server is Running On Port 3000')
})
ConnectToDB()