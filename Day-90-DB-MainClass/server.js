const app = require('./src/app')
const ConnectToDB = require('./config/database') 
ConnectToDB()
app.listen(3000,()=>{
    console.log('App Is Running On Port 3000')
})
