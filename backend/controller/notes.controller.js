import { Note } from '../models/Notes.model.js'

export const getallnotes = async (req, res) => {
  try {
    const doc = await Note.find({ user: req.id })

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        note: doc,
      },
    })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

export const postnote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
      user: req.id,
    })
    const saveNote = await note.save()
    res.send(saveNote)
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

export const updatenote = async (req, res) => {
  try {
    const { title, description, tag } = req.body
    const newNote = {}
    if (title) {
      newNote.title = title
    }
    if (description) {
      newNote.description = description
    }
    if (tag) {
      newNote.tag = tag
    }
    let note = await Note.findById(req.params.id)
    if (!note) res.send('Not Found')
    if (note.user.toString() != req.id) {
      return res.status(401).send('Not Allowed')
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      {
        new: true,
        runValidators: true,
      }
    )
    res.status(404).send(note)
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

export const deletenote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id)
    if (!note) res.send('Not Found')
    if (note.user.toString() != req.id) {
      return res.status(401).send('Not Allowed')
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.status(202).send()
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}
