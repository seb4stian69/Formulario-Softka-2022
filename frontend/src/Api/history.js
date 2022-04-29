import axios from 'axios'

// Constante que nos ayuda a acceder a nuestra base de datos para enviar los datos
export const getPostRequest = async() => await axios.get('/Form')

// Constante que nos ayuda a crear un post a nuestra base de datos
export const createHistory = async(history) => await axios.post('/Form', history)