import express from 'express'
const router = express.Router()
import { fetchuser } from '../middleware/fetchuser.js'
import * as notesController from '../controller/notes.controller.js'

router.route('/getallnotes').get(fetchuser, notesController.getallnotes)
router.route('/publishnote').post(fetchuser, notesController.postnote)
router.route('/updatenote/:id').patch(fetchuser, notesController.updatenote)
router.route('/deletenote/:id').delete(fetchuser, notesController.deletenote)

export default router
