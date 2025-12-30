import React from 'react'

const Card = (prop) => {
  return (
<div className='w-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-xl'>
  <img 
    className='h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-white/30' 
    src={prop.elem.Profile} 
    alt="" 
  />
  
  <div className='text-center w-full'>
    <h4 className='text-lg font-bold text-white tracking-wide'>{prop.elem.Username}</h4>
    <h4 className='text-xs text-gray-300 mt-1 wrap-break-word'>{prop.elem.Email}</h4>
    <h4 className='text-xs text-gray-400 font-mono mt-1'>{prop.elem.Number}</h4>
  </div>

  <button onClick={(idx)=>{
    prop.deleteHandler(prop.idx)
  }} className='mt-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg w-full shadow-lg transition-transform active:scale-95'>
    Remove User
  </button>

</div>

  )
}

export default Card