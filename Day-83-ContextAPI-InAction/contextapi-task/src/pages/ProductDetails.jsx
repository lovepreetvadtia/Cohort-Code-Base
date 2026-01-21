import React, { useContext } from 'react'
import {ProductdataContext} from '../context/MainContext'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = (elem,idx) => {
const data = useContext(ProductdataContext)

let {ProductId} = useParams()
let navigate = useNavigate()

  return (
    
  )
}

export default ProductDetails