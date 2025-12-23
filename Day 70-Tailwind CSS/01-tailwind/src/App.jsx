import { useState } from "react"
import Nav from "./components/Navbar"

const App = () => {
  const [num, setnum] = useState(30)

function inc(){
      setnum(num+1)
    }
function dicrease(){
setnum(num-1)
}

  return (
    

    
    <div className="bg-[#060503] h-screen w-screen parent">
      <div  className="counter text-amber-50">
        <div className="counterr">
        {num}
        </div>
        <button onClick={inc} className="h-10 w-30 text-white bg-gray-500 gap-0.5">Increase</button>
        <button onClick={dicrease} className="h-10 w-30 text-white bg-gray-500 ">Deccrease</button>
      </div>
        <Nav/>
    </div>
  )
}

export default App