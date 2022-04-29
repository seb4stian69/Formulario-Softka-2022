
import {questionClass} from './questions.class'

export class quiz {

    /**
     * @author Sebastian Santis
     * @param {questionClass[]} questions 
     * @description Clase utilizada para la creacion del objeto quiz
     */

    constructor(questions) {
        this.questions = questions    
        this.questionIndex = 0
        this.score = 0
        this.finish = false
    }
    
    // Getters & Setters
    setQuestions(question){
        this.questions = question
    }
    getQuestion(){
        return this.questions
    }

    setQuestionIndex(index){
        this.questionIndex = index
    }
    getQuestion(){
        return this.questionIndex
    }

    setScore(score){
        this.score = score
    }
    getScore(){
        return this.score
    }

    // Metodos accesores    
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }
    
    isFinish(){
        return this.questions.length === this.questionIndex
    }

    confirm(answer){

        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            
            this.score+=1            
            
        }else{
            this.finish=true
            return false
        }
        
        this.setQuestionIndex(this.questionIndex+=1)
        return true

    }

}