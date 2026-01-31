require('dotenv').config()
const app=require('./src/app')
const connectToDB=require('./src/config/connectToDB')

connectToDB()
app.listen(3000,()=>{
    console.log('Server In Running On Port 3000')
})

