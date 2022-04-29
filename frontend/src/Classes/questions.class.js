
/**
 * @author Sebastian Santis
 */

export class questionClass {

    /**
     * @param {String} question esta es la pregunta que se realizara
     * @param {String[]} options estas son las respuestas que el usuario escogera
     * @param {String} answer esta es la opcion correcta
     * @param {Number} Categoria esta es la categoria de la pregunta del usuario
     */

    constructor(question, options, answer, Categoria){
        this.question = question
        this.options = options
        this.answer = answer
        this.Categoria = Categoria
    }

    /**
     * @param {String} response es la respuesta del usuario a la pregunta
     * @returns {boolean} si la respuesta es correcta retorna un boolean true
     */

    isCorrectAnswer = (response) => {
        return response === this.answer
    }

}