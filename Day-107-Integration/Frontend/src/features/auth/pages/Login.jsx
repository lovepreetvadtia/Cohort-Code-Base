import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import { useState } from 'react'
import axios from 'axios'




const Login = () => {

const [indentifier, Setindentifier]= useState('')
const [password, SetPassword]= useState('')

function submitHandler(e){
  e.preventDefault()
  axios.post('http://localhost:3000/api/auth/login',{email:indentifier,username:indentifier,password},{withCredentials:true})
  .then(res=>{
    console.log(res.data) 
  })
}

  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} >
        <h2>Login</h2>
        <input type="text" name='user' placeholder='Enter Email Or Username' 
        value={indentifier} onInput={e=>{
          Setindentifier(e.target.value)
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