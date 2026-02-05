import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
const [notes, setNotes] = useState([])
const [titleInput, settitleInput] = useState('')
const [descInput, setDesc] = useState('')

function fetchNotes(){
  axios.get('https://full-stack-deploy-7109.onrender.com/api/notes')
    .then(res=>{
      setNotes(res.data.Note)
    })
}

useEffect(() => {
  fetchNotes()
}, [])


function submitHandler(e){
e.preventDefault()
setDesc('')
settitleInput('')

const {title,description}= e.target.elements
axios.post('https://full-stack-deploy-7109.onrender.com/api/notes',{
  title:title.value,
  description:description.value
}).then(res=>{
  fetchNotes()
}
)
}

function deleteeHandler(noteId){
  axios.delete('https://full-stack-deploy-7109.onrender.com/api/notes/'+noteId)
 .then(res=>{
   fetchNotes()
 }
 ) 
}

function updateHandler(noteId,field,value){
  axios.patch(`https://full-stack-deploy-7109.onrender.com/${noteId}`,{
    [field]:value
  })
  .then(()=>{
fetchNotes()
  })
}


  return (
    <>
    <form onSubmit={submitHandler}>
      <h2>Add A Note</h2>
      <input required type="text" value={titleInput} name="title" placeholder='Add Title' onChange={(e)=>{settitleInput(e.target.value)}}/>
      <input required type="text" name="description" value={descInput} placeholder='Add Description'onChange={(e)=>{setDesc(e.target.value)}}/>
      <button>Submit</button>
    </form>

    <div className="cards">
      {notes.map((elem)=>{
        return <div key={elem._id} className="card">
          <h2 contentEditable  suppressContentEditableWarning={true}
          onBlur={(e)=>{
            updateHandler(elem._id,'title',e.target.innerText)}
          }
          >{elem.title}</h2>
          <p contentEditable suppressContentEditableWarning={true}
          onBlur={(e)=>{
            updateHandler(elem._id,'description',e.target.innerText)}
          }
          >{elem.description}</p>
          <button onClick={()=>{
            deleteeHandler(elem._id)
          }} >Delete</button>
        </div>
        })}
    </div>
    </>
  )
}

export default App