import express from 'express'
import dotenv from 'dotenv'
import { DB_connect_status } from './db.js'
dotenv.config({ path: './config.env' })

DB_connect_status()

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
