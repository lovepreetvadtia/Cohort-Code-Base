import { useEffect, useState } from 'react'
import Post from './components/post'
import './styles/post.style.scss'
import { usePost } from './hooks/UsePost'
import Nav from '../shared/components/Nav'

const Feed = () => {

  const {feed,loading,HandleFeed,HandleUnLike,HandleLike}= usePost()

  useEffect(()=>{
    HandleFeed()
  },[]) 

if(loading|| !feed ){
  return (<main>
    <h1>Loading....</h1>
  </main>)
}

console.log(feed)


  return (
    <main>
      <div className="posts">
      <Nav/>
        {feed?.map((post)=>{
          return(
            <Post 
            key={post._id}
            user= {post.user}
            post ={post}
            loading = {loading}
            HandleLike= {HandleLike}
            HandleUnLike ={HandleUnLike}
            />
          )
        })
        }
      </div>
    </main>
  )
}

export default Feed
