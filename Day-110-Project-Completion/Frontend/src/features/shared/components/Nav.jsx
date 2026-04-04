import React from 'react'
import '../styles/button.scss'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

const Nav = () => {

    const navigate = useNavigate()


  return (
    <main className='nav-Container'> 
      <nav>
        <h2 onClick={()=>{
            navigate('/')
        }}>MyIG</h2>
        <button
        onClick={()=>{
            navigate('/create-post')
        }} 
        className='button'>Create Post</button>
        <Link to={'/login'}><p>Login</p></Link>
        <Link to={'/register'}><p>Register</p></Link>
      </nav>
    </main>
  )
}

export default Nav
