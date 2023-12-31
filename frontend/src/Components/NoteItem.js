import React from 'react'

const NoteItem = (props) => {
  const { note } = props
  return (
    <div>
      <div className="card mx-3">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
