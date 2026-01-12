import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const {slug}=useParams()
  return (

    <div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, {slug}</h2>
    </div>
  )
}

export default SingleBlog
