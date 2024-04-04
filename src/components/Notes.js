import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import AddItem from './AddItem';
import NoteItem from './NoteItem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etags: "" });

  useEffect(() => {
    getAllNotes();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    // Updated note state here
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags });
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etags)
    refClose.current.click();
    console.log("updating notes", note);
  };

  return (
    <>
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title:</label>
                  <input type="text" className="form-control" id="etitle" onChange={handleOnChange} value={note.etitle} name="etitle" />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description:</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etags" className="form-label">Tags:</label>
                  <input type="text" className="form-control" id="etags" name='etags' value={note.etags} onChange={handleOnChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <AddItem />
      <div>
        <h3>Your Notes:</h3>
        <div className='row'>
          {(notes).map((note, index) => (
            <div key={index} className='col-3 my-3'>
              <NoteItem updateNote={updateNote} note={note} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
