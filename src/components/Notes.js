import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/NoteContext'
import AddItem from './AddItem'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
  const {notes, setNotes, getAllNotes}  = context
  useEffect(()=>{
    getAllNotes();
  },[])
  return (
    <div>
      <div>
      <h3>Your Notes:</h3>
      <div className='row'>

      {(notes).map((note, index)=>(
        <div key={index} className='col-3 my-3'>
          <NoteItem note = {note}/>
        </div>
      ))}
      </div>
  <AddItem/>
    </div>
    </div>
  )
}

export default Notes
