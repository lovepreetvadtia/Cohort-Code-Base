import React, { useEffect } from 'react'
import Follow from './Follow'
import { useFollow } from '../hooks/usefollow'
import '../styles/follow.style.scss'

const FollowSection = () => {
  const {followers,loading,getFollowers} = useFollow()

  useEffect(()=>{
    getFollowers();
    console.log(followers)
  },[])
  return (
    <div className='followWrapper'>
      <h1>Followers</h1>
      {loading && <p>Loading...</p>}
      {followers.map((folwoo,index)=>{
        return <Follow 
        value= {index}
        followers = {folwoo}
        />
})
       }
    </div>
  )
}

export default FollowSection