import axios from "axios"

const api = axios.create({
    baseURL:"https://full-stack-app-y3qs.onrender.com//api",
    withCredentials:true
})

export  async function getFeed() {
    const response = await api.get('/all-posts')
    console.log(response.data)
    return response.data

}

export async function CreatePost(file,caption){

const formData = new FormData()
formData.append('file',file)
formData.append('caption',caption)

const response = await api.post('/post',formData)

return response.data 
}

export async function Like(postId){
    const response = await api.post(`/users/like/${postId}`)
    return response.data
}

export async function UnLike(postId){
    const response = await api.post(`/users/unlike/${postId}`)
    return response.data
}