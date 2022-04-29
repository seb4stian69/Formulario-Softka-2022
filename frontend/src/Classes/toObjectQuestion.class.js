import { questionClass } from "./questions.class";
import {dataQuestions} from '../Helpers/questions'

// Transforma en un objeto mi arreglo ubicado en la ruta Helpers/questions
export const quizQuestion = dataQuestions.map( question => new questionClass(question.question, question.options, question.answer, question.categoria) )

