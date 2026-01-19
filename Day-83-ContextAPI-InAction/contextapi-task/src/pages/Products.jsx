
import React, { useContext } from 'react'
import {ProductdataContext} from '../context/MainContext'
import AllProducts from '../components/AllProducts'
import Navbar from '../components/Navbar'

const Products = () => {
  const data = useContext(ProductdataContext)
  return (
    <div>
      <Navbar/>
      <h2 className='font-bold text-3xl mx-2 my-3' >All Products</h2>
      <AllProducts/>
    </div>
  )
}

export default Products