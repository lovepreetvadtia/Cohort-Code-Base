import React, { useRef, useState } from 'react'
import { usePost } from '../hooks/UsePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {
    const navigate = useNavigate()
    const {loading,HandleCreatePost} = usePost()
    const [caption,SetCaption] = useState('')
    const PostImgRef = useRef()

   async function handleSubmit(e){
        e.preventDefault()
     const file = PostImgRef.current.files[0]
     await HandleCreatePost(file,caption)
     navigate('/')
    }
    if(loading){
        return (<main><h1>Creating Post...</h1></main>)}


  return (
    <main>
        <div className="container">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label className='labelBtn' htmlFor="postImage">Select image</label>
                    <input ref={PostImgRef} hidden type="file" name='postImage' id='postImage' />
                <input value={caption} onChange={(e)=>{
                    SetCaption(e.target.value)
                }} type="text" placeholder='Enter Caption' />
                <button className='button'>Create New Post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost