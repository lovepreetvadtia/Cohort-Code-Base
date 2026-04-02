import React from 'react'


const Follow = ({followers}) => {
  return (<>
    <div className='follower'>
        <div className="wrapper">
            <div className='left'>
                <img height='34' width='34' src="https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp" alt="Profile Image" />
            </div>
            <div className="right">
                <div className="imgWrapper">
        </div>
        <div><p>{followers}</p></div>
                <button className='button'>Follow</button>
            </div>
        </div>
    </div>
  </>
  )
}

export default Follow