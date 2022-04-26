import {Router} from "express";
import {getForms, createQuestion, updateForm, deleteForm, getPostById} from "../Controllers/form.controllers.js"

const router = Router()

router.get( '/Form', getForms)

router.post('/Form', createQuestion)

router.put('/Form/:id', updateForm)

router.delete('/Form/:id', deleteForm)

router.get('/Form/:id', getPostById)

export default router