import React, { useState } from 'react'
import { NoteContext } from './NoteContext'

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '658fc7db1bfaf604ce834427',
      user: '658ebe4a8bbf2523b444da59',
      title: 'My Title2',
      description: 'This is my description',
      tag: 'General',
      timestamp: '2023-12-30T07:33:47.856Z',
      __v: 0,
    },
    {
      _id: '658fc7db1bfaf604ce834424',
      user: '658ebe4a8bbf2523b444da53',
      title: 'My Title1',
      description: 'This is my description1',
      tag: 'General2',
      timestamp: '2023-12-30T07:33:47.856Z',
      __v: 0,
    },
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
