import { User } from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//SIGN UP
export const createuser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({
        error: 'You have already signed up please login',
      })
    }

    const salt = await bcrypt.genSalt(10)
    const secpass = await bcrypt.hash(req.body.password, salt)

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secpass,
    })
    const data = { id: user._id }
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    res.status(201).json({ authToken })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

//LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findOne({ email })
    if (!user) {
      console.log(req.body)
      res.status(404).json({
        status: 'fail',
        error: 'Incorrect Email-id or Password',
      })
      return
    }
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
      res.status(404).json({
        status: 'fail',
        error: 'Incorrect Email-id or Password',
      })
      return
    }
    const data = { id: user._id }
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    res.status(201).json({ authToken })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error: 'Internal Server Error',
    })
  }
}

//USER DETAILS
export const getuser = async (req, res) => {
  try {
    const userid = req.id
    const user = await User.findById(userid).select('-password')
    res.send(user)
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      err: err.message,
    })
  }
}
