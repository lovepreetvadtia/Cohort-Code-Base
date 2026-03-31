import mongoose from 'mongoose'

export async function ConnectToDB(){

    await mongoose.connect(process.env.MONGO_URI)

    console.log("Connected To DB")
}
