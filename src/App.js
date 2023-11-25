import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NoteContainer from './components/NoteContainer'
import CreateNote from './components/CreateNote'
import NoteWrapper from './components/NoteWrapper'

const App = () => {
  const [Notes, setNotes] = useState([])

  const addNote = (note) => {
    setNotes((curNotes) => {
      return ([...curNotes, note])
    })
  }

  const deleteNote = (note) => {
    setNotes((curNotes) => {
      return curNotes.filter((_, index) => {
        return index !== note
      })
    })
  }

  return (
    <>
      <Navbar />
      <CreateNote addNoteFunc={addNote} />
      <NoteContainer>
        {Notes.map((note, index) => {
          return (<NoteWrapper key={index} id={index} title={note.title} description={note.description} deleteNoteFunc={deleteNote} />);
        })}
      </NoteContainer>
    </>
  )
}

export default App