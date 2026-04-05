import { useEffect, useState } from 'react'
import Post from './components/post'
import './styles/post.style.scss'
import { usePost } from './hooks/UsePost'

const Feed = () => {

  const {feed,loading,HandleFeed}= usePost()

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
        {feed?.map((post)=>{
          return(
            <Post 
            key={post._id}
            user= {post.user}
            post ={post}
            />
          )
        })
        }
      </div>
    </main>
  )
}

export default Feed
