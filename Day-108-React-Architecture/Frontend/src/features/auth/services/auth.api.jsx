import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export async function login(identifier,password) {
    try {
        const response = await api.post('/login',{
            email:identifier,
            username:identifier,
            password
        })
    .then(res=>{
        return res.data
    })
    } catch (error) {
        throw
    }
}

export async function register(username,email,password) {
 try {
        const response = await api.post('/register',{
            email,
            username,
            password
        })
    .then(res=>{
        return res.data
    })
    } catch (error) {
        throw
    }   
}

export async function getMe() {
    try {
        const response = await api.get('/get-me')
        .then(res=>{
            res.data
        })
    } catch (error) {
        throw error
    }
}