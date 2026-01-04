import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [Deta, setData] = useState([])
  const [Index, setIndex] = useState(1)

async function getData(){
  console.log('Data aa raha hai')
  const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=15`)
  console.log(response.data)
  setData(response.data)
}

useEffect(()=>{
  getData()

},[Index])

let printUserData = <div
className='absoulute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'
>Loading...</div>




if(Deta.length>1){
printUserData = Deta.map((elem,idx)=>{
  return <div key={idx} className='h-fit'>
   <Card elem={elem}/> 
  </div>
})
}


  return (
    <div className='bg-black h-screen w-screen'>
    <div className='overflow-auto text-white bg-black w-screen h-full flex justify-start center items-start flex-wrap gap-3 py-4 '>  
      {printUserData}
     
        
      <div className='absoulute top-1/2 left-1/2 fixed -translate-x-1/2 translate-50'>
      <button onClick={()=>{
        if(Index>1){
          setData([])
          setIndex(Index-1)}
        }} 
        className='m-2 px-6 py-2 rounded-2xl text-black font-bold bg-emerald-400'>Prev  </button>
      <button onClick={()=>{
        setData([])
        setIndex(Index+1)
      }} 
      className='m-2 px-6 py-2 rounded-2xl text-black font-bold bg-emerald-400'>Next</button>
      </div>
    </div>
    </div>
  )
}

export default App