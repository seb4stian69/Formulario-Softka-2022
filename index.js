// Modulos importados
import express from 'express'
import postsRoutes from './Backend/Routes/post.routes.js'
import {conectDB} from './Backend/Database/databaseConect.js'
import {PORT} from './Backend/config.js'
import morgan from 'morgan'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

// Variables globales
const app = express()
const __dirname = dirname( fileURLToPath(import.meta.url) )


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(postsRoutes)
app.use(express.static( join(__dirname, 'frontend/build') ))

// Conexion de base de datos
conectDB()

// Run server
app.listen(PORT)
console.log('\n+ ------------------------------- +')
console.log('Server on port', PORT)