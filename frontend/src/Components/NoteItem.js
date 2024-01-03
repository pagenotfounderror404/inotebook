import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const NoteItem = (props) => {
  const context = useContext(NoteContext)
  const { deleteNote } = context
  const { note, updateNote, showAlert } = props
  const TagColor = (e) => {
    if (e.toLowerCase() === 'urgent') return 'text-bg-danger'
    else if (e.toLowerCase() === 'default') return 'text-bg-success'
    else return 'text-bg-primary'
  }

  return (
    <div>
      <div
        className="card"
        style={{ marginRight: '1rem', marginBottom: '1rem' }}
      >
        <span className={`badge ${TagColor(note.tag)}`}>{note.tag}</span>
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <i
              className="fa-solid fa-pen"
              onClick={() => {
                updateNote(note)
              }}
            ></i>
            <i
              className="fa-solid fa-trash mx-3"
              onClick={() => {
                deleteNote(note._id)
                showAlert('Deleted Successfully', 'success')
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
