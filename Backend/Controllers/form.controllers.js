
import historySchema from "../Database/historySchema.js"

// Operacion GET para la obtencion de datos desde MongoDB
export const getForms = async (req, res) => {

    try {
        const getForms = await historySchema.find()
        res.send(getForms)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }

} 

// Operacion POST para la creacion de datos desde MongoDB
export const createQuestion = async (req,res) => {

    try {
        
        const {
            user,
            score,
            win
        } = req.body
    
        const newQ = new historySchema({
            user,
            score,
            win
        })
    
        await newQ.save()
    
        return res.json(newQ)

    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
