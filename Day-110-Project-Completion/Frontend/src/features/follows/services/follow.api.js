import axios from "axios";

const api = axios.create({
    baseURL:"https://insta-clone-backend-q2fg.onrender.com/api",
    withCredentials:true
})

export async function getFollows() {
    const response = await api.get('/followers')
    console.log(response.data)
    return response.data
}
