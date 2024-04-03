import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/NoteContext'

const AddItem = () => {
    const context = useContext(noteContext)
    const {addNote} = context
    const [note, setNote] = useState({title:"", description:"", tags:""})
    const handleOnChange = (event) =>{
        setNote({...note, [event.target.name]:event.target.value})
    }
    const handeClick = (e) =>{
        e.preventDefault()
        addNote(note.title, note.description, note.tags)
    }
    return (
        <>
            <h3>Add a Note</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" onChange={handleOnChange} name="title"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags:</label>
                    <input type="text" className="form-control" id="tags" name='tags' onChange={handleOnChange}/>
                </div>
               
            </form>
                <button type="submit" className="btn btn-primary" onClick={handeClick}>AddNote</button>
        </>
    )
}

export default AddItem
