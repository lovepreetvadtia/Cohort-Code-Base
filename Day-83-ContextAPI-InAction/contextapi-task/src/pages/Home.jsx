import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section2 from './Section2'


const Home = () => {
  const navigate = useNavigate()
  return (
  <>
        <Navbar/>
        <Hero/>
        <Section2/>
        </>
  )
}

export default Home 