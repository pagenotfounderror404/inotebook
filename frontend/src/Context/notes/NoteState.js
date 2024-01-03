import React, { useState } from 'react'
import NoteContext from './NoteContext'
import axios from 'axios'

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  const authtoken = localStorage.getItem('token')
  const getallNotes = async () => {
    const response = await axios.get(`${host}/api/v1/notes/getallnotes`, {
      headers: {
        'Content-type': 'application/json',
        'auth-token': authtoken,
      },
    })
    setNotes(response['data']['data']['note'])
  }

  const addNote = async (title, description, tag) => {
    const noteData = {
      title: title,
      description: description,
      tag: tag,
    }

    try {
      const response = await axios.post(
        `${host}/api/v1/notes/publishnote`,
        noteData,
        {
          headers: {
            'Content-type': 'application/json',
            'auth-token': authtoken,
          },
        }
      )

      const newNote = response.data

      setNotes((prevNotes) => [...prevNotes, newNote])
    } catch (error) {
      console.error('Error adding note:', error.message)
    }
  }

  const deleteNote = async (id) => {
    await axios.delete(`${host}/api/v1/notes/deletenote/${id}`, {
      headers: {
        'Content-type': 'application/json',
        'auth-token': authtoken,
      },
    })
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  const editNote = async (id, title, description, tag) => {
    try {
      await axios.patch(
        `${host}/api/v1/notes/updatenote/${id}`,
        {
          title: title,
          description: description,
          tag: tag,
        },
        {
          headers: {
            'Content-type': 'application/json',
            'auth-token': authtoken,
          },
        }
      )

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id
            ? {
                ...note,
                title: title || note.title,
                description: description || note.description,
                tag: tag || note.tag,
              }
            : note
        )
      )
    } catch (error) {
      console.error('Error editing note:', error.message)
    }
  }

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getallNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
