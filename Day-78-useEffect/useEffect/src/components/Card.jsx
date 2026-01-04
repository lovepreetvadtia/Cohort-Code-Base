import React from 'react'

const Card = (props,idx) => {
  return (
    <div className='overflow-hidden h-fit' key={idx}>
    <img className='h-40 w-40 rounded object-cover object-center' src={props.elem.download_url} alt="" />
    <h2>{props.elem.author}</h2>
  </div>
  )
}

export default Card