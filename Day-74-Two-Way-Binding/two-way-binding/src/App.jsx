import React, { useState } from 'react'

const App = () => {
  const [Text, setText] = useState('')
  const [Mail, setMail]= useState('')
  const [Number, setNumber]= useState('')
  const [User, setUser] = useState([])

  function formHandler(e){
    e.preventDefault()
    setUser([...User,{Text,Mail,Number}])
    setText('')
    setMail('')
    setNumber('')
  }

  return (
    <>
    <form onSubmit={(e=>{
      formHandler(e)
    })}>
      <input type="text" placeholder='Enter Name' required value={Text} onChange={(e=>{
        setText(e.target.value)
      })} />
      <input type="email" required placeholder='Enter Mail' value={Mail} onChange={(e=>{
        setMail(e.target.value)
      })} />
      <input type="number" required placeholder='Enter Number' value={Number} onChange={(e=>{
        setNumber(e.target.value)
      })} />
      <button>Submit</button>
    </form>
    {User.map((elem,idx)=>{
      return <div key={idx}>
        <h1>{elem.Text}</h1>
        <p>{elem.Mail}</p>
        <p>{elem.Number}</p>
      </div>
    })}
    </>
  )
}

export default App