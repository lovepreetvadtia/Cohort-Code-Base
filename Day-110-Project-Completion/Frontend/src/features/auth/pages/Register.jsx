import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../styles/auth.style.scss'

const Register = () => {
const {user,loading,HandleRegister} = useAuth()
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, SetPassword] = useState('')
const navigate = useNavigate()

async function HandleSubmit(e) {
    e.preventDefault()

    await HandleRegister(username,email,password)
    navigate('/')
    
}

if(loading){
  return(
    <h1>Loading....</h1>
  )
}

  return (
    <div className='form-container'>
      <form onSubmit={HandleSubmit}>
        <h2>Register</h2>
        <input value={username} type="text" 
        onInput={e=>{
            setUsername(e.target.value)
        }}
        name='username' placeholder='Enter Username' />
        <input value={email} type="text" 
        onInput={e=>{
            setEmail(e.target.value)
        }}
        name='email' placeholder='Enter Email' />
        <input value={password} type="text" 
        onInput={e=>{
            SetPassword(e.target.value)
        }}
        name='password' placeholder='Enter Password' />
        <button>Register</button>
        <p>Already Have A account, <Link to={'/login'}>Login</Link></p>
      </form>
    </div>
  )
}

export default Register
