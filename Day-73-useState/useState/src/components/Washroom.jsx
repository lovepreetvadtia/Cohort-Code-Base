import React from 'react'

const Washroom = (prop) => {
  return (
    <div className={`wash ${prop.name}`} >Your Gender is {prop.name}</div>
  )
}

export default Washroom