import mongoose from "mongoose"

/**
 * @var user dato de tipo String que almacena el usuario que realizo en esa sesion el quiz
 * @var score dato de tipo Number que almacena el porcentaje obtenido dentro del quiz
 * @var win dato de tipo Booleando que almacena el resultado de final del usuario
 */

const historySchema = new mongoose.Schema({

    user: {type: String},
    score: {type: Number},
    win: {type: Boolean} 

})

export default mongoose.model('historySchema', historySchema)