import React from 'react'

const List = (props) => {

  return (
    <div className="list">
                <div className="top">
                    <i className="ri-checkbox-blank-circle-fill"></i>
                    <h3>{props.h3}</h3>
                </div>
                <p>{props.para}</p>
            </div>
  )
}

export default List