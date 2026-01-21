import React, { useContext, useState } from 'react'
import {ProductdataContext} from '../context/MainContext'
import { Link, useParams } from 'react-router-dom'


const AllProducts = () => {
    const data = useContext(ProductdataContext)

    
  
  let {ProductId} = useParams()
  return (
    <Link to={'product-details/:{ProductId}'} className="products flex flex-wrap gap-3 justify-center">
    {data.map((elem,idx)=>{
      return <div key={idx} className=" flex-col items-center product bg-[#cdcde0] h-84 w-70 rounded-xl px-6 py-2 flex justify-center overflow-auto hover:scale-102 hover:bg-[#bfbfc4] transition-transform duration-300">
        <img className='h-50 w-fit object-contain object-center' src={elem.image} alt="" />
        <div className='text-left'>
        <p className='text-[#535357] capitalize font-semibold'>{elem.category}</p>
        <h2 className='font-bold' >{elem.title}</h2>
        <p className='text-[#3F5FAA] font-bold'> Price:-{elem.price}$</p>
        </div>
      </div>
    })}
    </Link>
  )
}

export default AllProducts