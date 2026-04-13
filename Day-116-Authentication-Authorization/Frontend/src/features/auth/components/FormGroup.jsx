import React from 'react'

const FormGroup = ({label,placeholder}) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input type={label} placeholder={placeholder} />
    </div>
  )
}

export default FormGroup