import React, { createContext, useEffect, useState } from 'react'
import {getAllProductsData} from '../api/ProductDataAPI.js'
export const ProductdataContext = createContext()

const MainContext = (props) => {

  const [ProuctData, setProductData] = useState([])

  const  setData= async ()=>{setProductData(await getAllProductsData())}
  
  useEffect(() => {
    setData()
  }, [])

  
  return (
    <ProductdataContext.Provider value={ProuctData}>
    {props.children}
    </ProductdataContext.Provider>
  )
}

export default MainContext