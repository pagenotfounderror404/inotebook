import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<DATABASE_PASSWORD>',
  process.env.DATABASE_PASSWORD
)
export const DB_connect_status = () => {
  mongoose.connect(DB).then(() => console.log('DB connection successful!'))
  console.log(DB_connect_status)
}
