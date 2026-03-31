import React from 'react'
import Feed from '../features/post/Feed'
import Nav from '../features/shared/components/Nav'
import FollowSection from '../features/follows/components/FollowSection'
import '../features/follows/styles/follow.style.scss'

const HomePage = () => {
  return (
    <main className='HomeMain'>
        <Nav/>
    <div className='Down'>
        <FollowSection/>
        <Feed/>
        <div className='third'>I am last</div>
    </div>    
    </main>
  )
}

export default HomePage
