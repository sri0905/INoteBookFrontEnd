import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const {deleteNote} = context;
    const { note , updateNote} = props
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <p className="card-text">{note.tags}</p>
                <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
            </div>
        </div>
)}

export default NoteItem
