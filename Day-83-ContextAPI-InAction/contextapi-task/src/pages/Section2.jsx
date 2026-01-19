import React, { useContext } from 'react'
import {ProductdataContext} from '../context/MainContext'
import AllProducts from '../components/AllProducts'


const Section2 = () => {
  const data = useContext(ProductdataContext)
  console.log(data)
  return (
    <>
    <div className='flex justify-between' >
        <h2 className='font-semibold text-4xl'>Featured Products</h2>
        <button className='text-amber-50 text-[15px] font-semibold px-5 py-1.5 rounded-md bg-[#406BD1]'>See All Products</button>
    </div>
        <AllProducts/>
    </>
  )
}

export default Section2