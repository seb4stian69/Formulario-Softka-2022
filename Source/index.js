// Modulos importados
import express from 'express'
import postsRoutes from './Backend/Routes/post.routes.js'
import {conectDB} from './Backend/Database/databaseConect.js'
import {port} from './Backend/config.js'
import morgan from 'morgan'

// Variables globales
const app = express()


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(postsRoutes)

// Conexion de base de datos
conectDB()

// Run server
app.listen(3000)
console.log('\n+ ------------------------------- +')
console.log('Server on port', port)