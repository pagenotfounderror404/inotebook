import React, { useEffect } from 'react'
import { useContext, useRef, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

function Notes(props) {
  const context = useContext(NoteContext)
  const { notes, getallNotes, editNote } = context
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem != null) {
      getallNotes()
    } else {
      navigate('/login')
    }
  })
  let [note, setNote] = useState({
    id: '',
    etitle: '',
    edescription: '',
    etag: '',
  })
  const [id, setid] = useState('')

  const updateNote = (currnote) => {
    setNote(() => ({
      id: currnote._id,
      etitle: currnote.title,
      edescription: currnote.description,
      etag: currnote.tag,
    }))
    setid(currnote._id)

    ref.current.click()
    props.showAlert('Updated Successfully', 'success')
  }

  const handleClick = (e) => {
    e.preventDefault()
    editNote(id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
    // updateNote(note.etitle, note.edescription, note.etag)
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const ref = useRef(null)
  const refClose = useRef(null)
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-etitle fs-5" id="exampleModalLabel">
                Edit
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  placeholder="Add your Note"
                  onChange={onChange}
                  value={note.etitle}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <input
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  onChange={onChange}
                  value={note.edescription}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  className="form-control"
                  id="etag"
                  name="etag"
                  onChange={onChange}
                  value={note.etag}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
          {notes.length === 0 && 'No notes to display'}
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                updateNote={updateNote}
                note={note}
                showAlert={props.showAlert}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
