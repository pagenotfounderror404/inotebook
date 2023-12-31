import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Context/notes/NoteContext'
import NoteItem from './NoteItem'

function Notes() {
  const context = useContext(NoteContext)
  const { notes, setNotes } = context
  return (
    <div className="row my-3">
      <h2>Notes</h2>

      {notes.map((note) => {
        return <NoteItem note={note} />
      })}
    </div>
  )
}

export default Notes
