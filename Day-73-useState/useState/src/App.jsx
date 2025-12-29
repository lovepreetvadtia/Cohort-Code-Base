import React, { useState } from 'react'
import Washroom from './components/washroom'

const App = () => {
  const [Gender, setGender] = useState("Male")

  const changeGender = ()=>{
    if(Gender=='Male'){
      setGender("Female")
    }
    else if(Gender=="Female"){
      setGender("Other")
    }
    else{
      setGender("Male")
    }
  }
  return (
    <>
    <h1>{Gender}</h1>
    <button onClick={changeGender}>Change Gender</button>
    <Washroom name={Gender} />
    </>
  )
}

export default App