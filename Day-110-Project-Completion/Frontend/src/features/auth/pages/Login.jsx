import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import '../styles/auth.style.scss'



const Login = () => {
const {user,loading,HandleLogin} = useAuth()
const [identifier, setidentifier] = useState('')
const [password,SetPassword] = useState('')
const navigate = useNavigate()

async function HandleSubmit(e) {
    e.preventDefault()
await HandleLogin(identifier,password)
navigate('/')

}
if(loading){
  return (
    <h1>Loading..... </h1>
  )

}

  return (
    <div className='form-container'>
        <form onSubmit={HandleSubmit}>
        <h2>Login</h2>
        <input value={identifier} type="text" name='identifier' placeholder='Enter Username or Email'
        onInput={e=>{
            setidentifier(e.target.value)
        }}
        />
        <input  value={password} type="text" name='password' placeholder='Enter Password' 
        onInput={e=>{
            SetPassword(e.target.value)
        }}
        />
        <button>Login</button>
        <p>Don't Have A account, <Link to={'/register'}>Register</Link></p>
      </form>
    </div>
  )
}

export default Login