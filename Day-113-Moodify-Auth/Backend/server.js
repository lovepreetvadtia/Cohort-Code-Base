import { app } from "./src/app.js";
import { ConntectToDB } from "./src/config/database.js";
import { configDotenv } from "dotenv";
configDotenv()

app.listen(3000, console.log(
    'Server is Running on port 3000'
))

ConntectToDB()