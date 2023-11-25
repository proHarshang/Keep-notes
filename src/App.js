import React from 'react'
import Navbar from './components/Navbar'
import NoteContainer from './components/NoteContainer'
import CreateNote from './components/CreateNote'

const App = () => {
  return (
    <>
      <Navbar />
      <CreateNote />
      <NoteContainer />
    </>
  )
}

export default App