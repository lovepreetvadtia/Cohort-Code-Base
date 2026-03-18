import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

const [identifier, setidentifier] = useState('')
const [password,SetPassword] = useState('')


async function HandleSubmit(e) {
    e.preventDefault()

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