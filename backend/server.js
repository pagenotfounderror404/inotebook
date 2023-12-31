import { app } from './app.js'
import dotenv from 'dotenv'
import { DB_connect_status } from './db.js'
dotenv.config({ path: './config.env' })

DB_connect_status()

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`iNotebook listening on port ${port}`)
})
