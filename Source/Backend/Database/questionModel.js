import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({

    tittle: {type: String},
    description: {type: String}

})

export default mongoose.model('questionModel', questionSchema)