import React, { useState } from 'react'

const Navbar = (props) => {
    const [newTheme, setnewTheme] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)
            setnewTheme('')
        }}>
            <input type="text" 
            value={newTheme}
            onChange={(e)=>{
                setnewTheme(e.target.value)
            }}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Navbar