import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})

async function GetFollows() {
    const response = await api.get('/follows')
}
