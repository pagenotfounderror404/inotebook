import express from 'express'
import notesRouter from './routes/notes.route.js'
import authRouter from './routes/auth.route.js'
export const app = express()

app.use(express.json())

app.route('/').get((req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/notes', notesRouter)
app.use('/api/v1/auth', authRouter)
