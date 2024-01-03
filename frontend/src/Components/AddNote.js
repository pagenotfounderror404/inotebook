import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext.js'
import { useState } from 'react'

export default function AddNote(props) {
  const context = useContext(NoteContext)
  const { addNote } = context
  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: '',
  })
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({
      title: '',
      description: '',
      tag: 'default',
    })
    props.showAlert('Added Successfully', 'success')
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container my-3">
        <h2>Add Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            placeholder="Add your Note"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag === 'default' ? '' : note.tag}
          ></input>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          disabled={note.title.length < 5 || note.description.length < 5}
          onClick={handleClick}
        >
          Add Note
        </button>
      </div>
    </div>
  )
}
