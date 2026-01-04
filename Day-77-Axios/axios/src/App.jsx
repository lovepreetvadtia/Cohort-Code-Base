import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [Images, setImages] = useState([])

  const dataFetcher = async ()=>{
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    
    // setImages(response.data)
    console.log(response)
  }


  return (
    <div>
      <button onClick={dataFetcher
      }>Get Data</button>
      {/* {Images.map((elem,idx)=>{
        return <h1 key={idx}> {elem.name} </h1>
      })} */}
    </div>
  )
}

export default App