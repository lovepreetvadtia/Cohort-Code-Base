import React from 'react'

// ROOT Colors
// 1- #EA6E5F - red
// 1- #060503 - Black
// 1- #1E1E1E - Gray
// 1- #F5F7F4 - White


const Nav = () => {
  return (
   <nav className='h-20 w-full h-screen flex justify-between p-20'>
    <div className="right text-amber-50 text-[24px] ">
        <h2>DVSY</h2>
    </div>
    <div className="font-mono font-semibold flex gap-2.5 left mt-3.5">
        <button className=' rounded-lg p-5 h-12 w-25 text-[#F5F7F4] bg-[#1E1E1E]'>DESIGNERS</button>
        <button className='rounded-lg p-5 h-12 w-20 text-[#F5F7F4] bg-[#1E1E1E]'>COLLABS</button>
        <button className='rounded-lg p-5 h-12 w-20 text-[#F5F7F4] bg-[#1E1E1E]'>EVENTS</button>
        <button className='rounded-lg p-5 h-12 w-20 text-[#F5F7F4] bg-[#1E1E1E]'>BLOG</button>
        <button className='rounded-lg p-5 h-12 w-20 text-[#F5F7F4] bg-[#1E1E1E]'>CARD</button>
        <button className='rounded-lg p-5 h-12 w-35 text-[#060503] bg-[#EA6E5F]'>GET IN TOUCH</button>
    </div>
   </nav>
  )
}

export default Nav