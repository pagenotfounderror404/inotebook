import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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

export const Notes = mongoose.model('Notes', NotesSchema)
