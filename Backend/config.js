import dotenv from "dotenv"
dotenv.config()

// Constantes que exportan variables dentro del entorno de desarrollo
export const mongoURL = process.env.mongoURL
export const PORT = process.env.PORT || 3000