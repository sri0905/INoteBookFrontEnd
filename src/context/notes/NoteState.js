import noteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:4033";
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
        const allNotes = json.notes
        setNotes(allNotes)
        console.log(notes)
       
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
        const json = response.json();
        console.log(json)
        const note = {
            "_id": "66030765bf8f79149715aasd3rq3r3cb",
            "user": "6601c07b3708aaf371ba82b8",
            "title": title,
            "description": description,
            "tags": tags,
            "date": "2024-03-26T17:35:33.715Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    };

    const deleteNote = async (id) => {
        const response = await fetch(`http://localhost:4033/api/notes/deleteNotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
        });
    
       
       
       
    };

    const editNote = async (id, title, description, tags) => {
        const response = await fetch(`${host}//api/notes/updateNotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYwMWMwN2IzNzA4YWFmMzcxYmE4MmI4IiwiaWF0IjoxNzExNDUwNDY4fQ.DfSIpCpq2nKhDZ_gJXT4aySZ3THc4_qtjX_w0ECVcw4"
            },
            body: JSON.stringify({title, description, tags}),
        });
        const json = response.json();
        console.log(json)
        
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tags = tags
            }
        }
    };

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
