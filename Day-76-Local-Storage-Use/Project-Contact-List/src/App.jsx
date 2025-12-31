import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [Username, setUsername] = useState('')
  const [Profile, setProfile] = useState('')
  const [Email, setEmail] = useState('')
  const [Number, setNumber] = useState('')
  
  const localData = JSON.parse(localStorage.getItem('all-user')) || []

  const [AllUser, setAllUser] = useState(localData)

  const formHandler =(e)=>{
    e.preventDefault()
    const newArry = [...AllUser]
    newArry.push({Username,Email,Number,Profile})

    setAllUser(newArry)
    localStorage.setItem('all-user',JSON.stringify(newArry))
    
    

    setUsername('')
    setEmail('')
    setNumber('')
    setProfile('')
  }


  const deleteHandler =(idx)=>{
    let newArry =[...AllUser]

    let conf =confirm("Are you wanna delete")

    if(conf){
      newArry.splice(idx,1)
      alert('Contact Deleted')
    }
    else{
      alert('Contact Not Deleted')
    }

    setAllUser(newArry)
    localStorage.setItem('all-user',JSON.stringify(newArry))
  }

  return (
    <div className='bg-[#dadada] h-screen gap-2 w-screen px-1 py-2 flex justify-center items-center'>
      <div className="left bg-[#6E54B5] px-4 py-5 h-full w-1/4">
    <form className='bg-[#2B2738] flex flex-col px-5 py-5 text-amber-50 w-full h-fit gap-4 rounded-xl' onSubmit={(e)=>{
      formHandler(e)
    }}>
      <h2 className='text-2xl font-bold text-amber-100'>Create User</h2>
      <input
      className='bg-[#4f4963] px-4 py-2 rounded-md outline-0'
      value={Username}
      required
      placeholder='Enter Name' 
      type="text"
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
      <input
      className='bg-[#4f4963] px-4 py-2 rounded-md outline-0'
      value={Profile}
      required
      placeholder='Enter Profile URL' 
      type="text"
      onChange={(e)=>{
        setProfile(e.target.value)
      }}
      />
      <input
      className='bg-[#4f4963] px-4 py-2 rounded-md outline-0'
      value={Email}
      required
      placeholder='Enter Email' 
      type="email"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
      <input
      className='bg-[#4f4963] px-4 py-2 rounded-md outline-0'
      value={Number}
      required
      placeholder='Enter Number' 
      type="number"
      onChange={(e)=>{
        setNumber(e.target.value)
      }}
      />
      <button className='bg-[#6E54B5] px-3 py-2 rounded-md active:scale-95 font-bold'>Submit</button>
    </form>
    </div>
    <div className="right bg-[#4f4963] w-3/4 h-full px-2 py-2 gap-2 flex flex-wrap justify-start items-start">
        {AllUser.map((elem,idx)=>{ 
      return <Card elem={elem} key={idx} idx={idx} deleteHandler={deleteHandler} />})}
    </div>
    </div>
  )
}

export default App