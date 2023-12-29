import express from 'express'
import userRouter from './routes/User.route.js'
import authRouter from './routes/auth.route.js'
export const app = express()

app.use(express.json())

app.route('/').get((req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
