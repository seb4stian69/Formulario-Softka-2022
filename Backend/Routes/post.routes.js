import {Router} from "express";
import {getForms, createQuestion} from "../Controllers/form.controllers.js"

/**
 * @description Constante creada para iniciar el modulo
 * @var router
 */

const router = Router()

// Metodo que accede a los datos del formulario
router.get( '/Form', getForms)

// Metodo que crea y almacena datos en el formulario
router.post('/Form', createQuestion)

export default router