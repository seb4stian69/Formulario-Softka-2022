import questionModel from "../Database/questionModel.js"

export const getForms = async (req, res) => {

    try {
        const getForms = await questionModel.find()
        res.send(getForms)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }

} 

export const createQuestion = async (req,res) => {

    try {
        
        const {
            tittle,
            description
        } = req.body
    
        const newQ = new questionModel({
            tittle,
            description
        })
    
        await newQ.save()
    
        return res.json(newQ)

    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const updateForm = async (req,res) => {

    try {
        const updateForm = await questionModel.findByIdAndUpdate(req.params.id, req.body, { new:true })
        console.log(updateForm)
        return res.send('Udapte element')
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const deleteForm = async (req,res) => {

    try {
        const formRemove = await questionModel.findByIdAndDelete(req.params.id)
        if(!formRemove) return res.sendStatus(404)
        return res.json(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const getPostById = async (req,res) => {

    try {
        const formGetById = await questionModel.findById(req.params.id)
        if(!formGetById) return res.sendStatus(404)
        return res.json(formGetById)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}