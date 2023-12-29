import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "'Enter a valid name'"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Please enter a unique value for email'],
    validate: [validator.isEmail, 'Enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password ashouldn't be less than 8 characters"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})
export const User = mongoose.model('User', UserSchema)
