import express from 'express'
const router = express.Router()
import * as authController from '../controller/auth.controller.js'
import { fetchuser } from '../middleware/fetchuser.js'

router.route('/').get(authController.getallUser)
router.route('/createuser').post(authController.createuser)

router.route('/createuser').post(authController.createuser)

router.route('/login').post(authController.login)
router.route('/getuser').post(fetchuser, authController.getuser)
export default router
