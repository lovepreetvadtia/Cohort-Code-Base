import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password,SetPassword] = useState('')

function HandleSubmit(e){
  e.preventDefault()
axios.post('http://localhost:3000/api/auth/register',{
  username,
  email,
  password
},{withCredentials:true})
.then(res=>{
  console.log(res.data)}
)}

  return (
    <div className='form-container'>
      <form onSubmit={HandleSubmit}> 
        <h2>Create an Account</h2>
        <input value={username} onInput={(e)=>{
          setUsername(e.target.value)
        }}
        type="text" name='username' placeholder='Enter Username' />
        <input value={email} onInput={(e)=>{
          setEmail(e.target.value)
        }}
        type="text" name='email' placeholder='Enter Email' />
        <input value={password} onInput={(e)=>{
          SetPassword(e.target.value)
        }}
        type="text" name='password' placeholder='Enter Password' />
        <button>Register</button>
        <p>Already Have an Account?<Link className='toggleAuthForm' to='/login'>Login</Link> </p>
        
      </form>
    </div>
  )
}

export default Register