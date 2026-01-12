import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [Theme, setTheme] = useState('light')

  const changeTheme =(u)=>{
    setTheme(u)
  }


  return (
    <div>
      <h2>Theme is {Theme}</h2>
      <Navbar changeTheme={changeTheme} />
    </div>
  )
}

export default App

