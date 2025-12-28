import React, { useState } from 'react'

const App = () => {
const [marks, setmarks] = useState([32,31,44,55,60])

function giveGrace(){
  let newMarks = marks.map((elem)=>{
    if(elem+5<=100){
      return elem+5
    }
    else{
     return elem
    }
  })
  setmarks(newMarks)
}

  return (
    <>
    {marks.map((elem,idx)=>{
      return <h1 key={idx}>{elem}({elem>=33?"Pass":"Fail"})</h1>
    })}
    <button onClick={giveGrace} >Give Grace</button>
    </>

  )
}

export default App