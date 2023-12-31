import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    minlength: [3, 'Enter a valid title'],
  },
  description: {
    type: String,
    minlength: [5, 'Enter a valid description'],
  },
  tag: {
    type: String,
    default: 'General',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

export const Note = mongoose.model('Notes', NotesSchema)
