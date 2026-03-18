import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import { useState } from 'react'
import axios from 'axios'




const Login = () => {

const [identifier, Setidentifier]= useState('')
const [password, SetPassword]= useState('')

function submitHandler(e){
  e.preventDefault()
}

  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} >
        <h2>Login</h2>
        <input type="text" name='user' placeholder='Enter Email Or Username' 
        value={identifier} onInput={e=>{
          Setidentifier(e.target.value)
        }} 
        />
        <input type="text" name='password' placeholder='Enter Password' 
        value={password} onInput={e=>{
          SetPassword(e.target.value)
        }} />
        <button>Login</button>
        <p>Don't Have Account? <Link className='toggleAuthForm' to='/register'>Register</Link></p>
        
      </form>
    </div>
  )
}

export default Login