const  ConnectToDB= ()=>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb+srv://lovepreetvadtia_db_user:BpXfOUgzJvq4vkdh@cohort2cluster.ho5c73j.mongodb.net/')
    .then(()=>{
    })
    console.log('Connected To DB')
}

module.exports = ConnectToDB