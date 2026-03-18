import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})



export async function login(identifier,password) {
    try {
    const response =  api.post('/login',{email:identifier,username:identifier,password})
  .then(res=>{
    return response.data 
  })

  } catch (error) {
        throw error
    }
}

export async function register(username,email,password) {
     try {
    const response =  api.post('/login',{username:username,email:email,password})
  .then(res=>{
    return response.data 
  })

  } catch (error) {
        throw error
    }
}

export async function get() {
  try {
    const response = api.get('/get-me')
    .then((res)=>{
      return res.data
    })
  } catch (error) {
    throw error
  }
}