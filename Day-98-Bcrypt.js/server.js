require('dotenv').config()
const app =  require('./src/app')
const ConnectToDB= require('./src/config/database')

app.use

app.listen(3000,()=>{
    console.log('Server is Running on port 3000')
})
ConnectToDB()