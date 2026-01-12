import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (prop) => {
  return (
    <>
    <NavLink to='/' 
    className={({isActive})=>isActive?'actiive':''}>Home</NavLink>
    <NavLink to='/about' >About</NavLink>
    <NavLink to='/contact' >Contact</NavLink>
    </>
  )
}

export default Navbar
