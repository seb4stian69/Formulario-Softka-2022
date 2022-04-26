import dotenv from "dotenv"
dotenv.config()

export const mongoURL = process.env.mongoURL || 'mongodb://localhost/tstDb'
export const port = process.env.port || 3000