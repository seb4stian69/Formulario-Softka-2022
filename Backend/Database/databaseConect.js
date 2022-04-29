import mongoose from "mongoose";
import {mongoURL} from '../config.js'

/**
 * @var mongoUrl es la url creada en el entorno de desarrollo en el archivo de variables de entorno
 */

export async function conectDB () {

    try {
        const db = await mongoose.connect(mongoURL)
        console.log('Connected to ', db.connection.name)
        console.log('+ ------------------------------- +\n')
    } catch (error) {
        console.error(error)
    }

}