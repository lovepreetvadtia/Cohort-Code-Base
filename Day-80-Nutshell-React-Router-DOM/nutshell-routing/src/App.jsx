import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './Pages/Home.Jsx'
import About from './Pages/About'
import Dash from './Pages/Dash(private)'
import Contact from './Pages/Contact'
import BlogList from './Pages/BlogList'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Navbar from './components/Navbar'
import SingleBlog from './pages/SingleBlog'
import Blog from './pages/Blog'


const App = () => {
  const [Theme, setTheme] = useState('light')

  const newTheme =(u)=>{
    setTheme(u)
  }
  return (
    <>

    <Navbar theme={newTheme} />
    <div><p>Theme is {Theme}</p></div>
    <Routes>
    <Route path='/' element={<Home/>}/>  
    <Route path='/about' element={<About/>}/>  
    <Route path='/contact' element={<Contact/>}/>  
    <Route path='/blog' element={<Blog/>}/>  
    <Route path='/blogs' element={<BlogList/>}/>  
    <Route path='/dashboard' element={<Dash/>}>
    <Route path='profile' element={<Profile/>}/>  
    <Route path='settings' element={<Settings/>}/>  
    </Route>
    <Route path='/login' element={<Login/>}/>  
    <Route path='/*' element={<NotFound/>}/>  
    <Route path='blogs/:slug' element={<SingleBlog/>}/>  
    </Routes>
    </>
  )
}

export default App