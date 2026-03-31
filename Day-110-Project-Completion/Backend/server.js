import { app } from './src/app.js'
import { ConnectToDB } from './src/config/database.js'


app.listen(3000, () => {
    console.log("Server Is Running On Port 3000")
})
ConnectToDB()