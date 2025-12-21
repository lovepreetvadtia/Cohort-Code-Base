import React from 'react'

export const Card = (props) => {
  return (
    <div className="card">
        <i className="ri-arrow-right-circle-fill"></i>
        <h3>{props.h3}</h3>
        <h4>{props.h4}</h4>
        <p>{props.desc}</p>
    </div>
  )
}
