import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import SEO from './Pages/SEO'
import WebDesign from './Pages/WebDesign'
import NotFound from './Pages/NotFound'
import NoService from './Pages/NoService'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/services' element={<Services/>} ></Route>
        <Route path='/services/seo' element={<SEO/>} ></Route>
        <Route path='/services/web-design' element={<WebDesign/>} ></Route>
        <Route path='/services/:id' element={<NoService/>} ></Route>
        <Route path='/*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  )
}

export default App