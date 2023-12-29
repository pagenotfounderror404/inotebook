import express from 'express'
const router = express.Router()

router.route('/').get((req, res) => {
  res.send('Hi from user')
})
export default router
