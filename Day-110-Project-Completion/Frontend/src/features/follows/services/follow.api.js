import axios from "axios";

const api = axios.create({
    baseURL:"https://full-stack-app-y3qs.onrender.com//api",
    withCredentials:true
})

export async function getFollows() {
    const response = await api.get('/followers')
    console.log(response.data)
    return response.data
}
