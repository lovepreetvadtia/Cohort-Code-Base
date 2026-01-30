const app = require('./src/app')
const mongoose = require('mongoose')

app.listen(3000,()=>{
    console.log('Server Is Running On Port 3000')
})

function connectDB(){
    mongoose.connect('mongodb+srv://lovepreetvadtia_db_user:BpXfOUgzJvq4vkdh@cohort2cluster.ho5c73j.mongodb.net/mainDB')
    .then(()=>{
        console.log('DB Connect')
    })
    
}
connectDB()




