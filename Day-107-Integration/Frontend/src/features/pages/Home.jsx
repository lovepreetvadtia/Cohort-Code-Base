import React from 'react'
import { NavLink } from 'react-router'
const Home = () => {
  return (
    <>

    <div className="navContainer">
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/register'>Register</NavLink>
    </div>
    </>
  )
}

export default Home