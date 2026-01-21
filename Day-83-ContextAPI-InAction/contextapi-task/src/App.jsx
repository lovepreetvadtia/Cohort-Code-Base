import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import NotFound from './pages/404'


const App = () => {
  return (
    <div className='px-20' >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product-details/:ProductId' element={<ProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
  )
}

export default App