import noteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const Notes = []
        

    const [notes, setNotes] = useState(Notes);
    const getAllNotes = async ()=>{
        const response = await fetch("http://localhost:4033/api/notes/getAllNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
        });
        const json = await response.json()
        const allNotes = json
        setNotes(allNotes)
       
    }
    const addNote = async (title, description, tags) => {
        console.log("adding a note")
        const response = await fetch("http://localhost:4033/api/notes/createNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
            body: JSON.stringify({title, description, tags}),
        });
        const json = await response.json();
        console.log(json)
        const note = {
            "user": "6601c07b3708aaf371ba82b8",
            "title": title,
            "description": description,
            "tags": tags,
        }
        setNotes(notes.concat(note))
    };

    const deleteNote = async (id) => {
        await fetch(`http://localhost:4033/api/notes/deleteNotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
        });
        
        const newNotes = notes.filter((note)=>{return note._id !== id})
       setNotes(newNotes)   
    };

    const editNote = async (id, title, description, tags) => {
        const response = await fetch(`http://localhost:4033/api/notes/updateNotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
            body: JSON.stringify({title, description, tags}),
        });
        const json = response.json();
        console.log(json)
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tags = tags
                break;
            }
        }
        setNotes(newNotes)
    };

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
