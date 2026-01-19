import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav flex items-center justify-between mt-3">
        <div className="logo">
            <i className="ri-building-3-fill text-2xl"></i>
            <span className='font-mono font-bold text-2xl'>CRISANO</span>
        </div>
        <div className="center flex gap-4 font-medium">
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/about'}>About</Link>
        </div>
        <div className="button flex gap-1 items-center">
            <i className="ri-shopping-cart-2-fill text-2xl"></i>
            <button className='bg-[#3F5FAA] text-amber-50 px-4 py-2 rounded-xl font-bold'>Go To Cart</button>
        </div>
    </div>
    </>
  )
}

export default Navbar