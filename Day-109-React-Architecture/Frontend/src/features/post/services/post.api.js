import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})

export  async function getFeed() {
    const response = await api.get('/all-posts')
    console.log(response.data)
    return response.data

}