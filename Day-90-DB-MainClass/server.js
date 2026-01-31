const app = require('./src/app')
const ConnectToDB = require('./config/database') 

require('dotenv').config()
ConnectToDB()
app.listen(3000,()=>{
    console.log('App Is Running On Port 3000')
})
