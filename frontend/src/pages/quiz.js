// import React, { useState } from 'react'
import {user ,quizQuestion, quiz as Quiz} from './0_mainExport'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useMyContext } from '../Context/contextContainer';

function QuizFrame() {

  const navigate = useNavigate()
  const { createHist } = useMyContext()
  const { setUser,User, Username } = useMyContext()

  // Instancia de la clase Quiz
  const [_Quiz, set_Quiz] = useState(new Quiz(quizQuestion))

  // Estados dentro de QuizFrame
  const [Question, setQuestion] = useState(_Quiz.getQuestionIndex().question) 
  const [Options, setOptions] = useState(_Quiz.getQuestionIndex().options)
  const [Categoria, setCategoria] = useState(_Quiz.getQuestionIndex().Categoria)
  const [Puntos, setPuntos] = useState(_Quiz.getScore())
  const [Won, setWon] = useState(false)

  // Funcion para actualizar el valor del estado dependiendo de la pregunta
  const updateForm =()=>{

    if(_Quiz.isFinish()){

      setPuntos(_Quiz.getScore())
      setWon(true)
      console.log(_Quiz.getScore())

      
      const _user = new user(Username, 25, true)
      setUser( _user )
      createHist(_user)

      alert('Terminaste la prueba ... ¡Has ganado! ... \nPuedesuedes revisar el historial tuyo y de otros en el apartado [Ir al historial] en la pagina principal')
      navigate('/Home')

    }else{
      setQuestion(_Quiz.getQuestionIndex().question)
      setOptions(_Quiz.getQuestionIndex().options)
      setCategoria(_Quiz.getQuestionIndex().Categoria)
      setPuntos(_Quiz.getScore())
    }
    
  }
  
  // Funcion para confirmar la validez de la respuesta
  let vrft
  const confirmaR = (res) =>{  

    vrft = _Quiz.confirm(res)

    if( vrft ){

      alert('Respuesta correcta')
      updateForm()
      
    }else{

      alert('Respuesta incorrecta seras enviado a la pagina inicial y podras ver tu historico en la parte de historial')
      navigate('/Home')

      const _user = new user(Username, Puntos, false)
      createHist(_user)

    }

  }

  // Frame
  return (<div className='formQuiz'>

    <div className='content'>

      <div className='Quiz'>
        
        <div className='preguntaFQ'>{`Categoria ${Categoria}`}</div>

        <textarea readOnly={true} className='textPreguntaFQ' value={Question}></textarea>

        <div className='cajaRespuestasFQ'>
          <input onClick={ () => confirmaR(Options[0]) } className='radioBtn' id="radioBtn1" name='radioBtn' type='button'/> <label>{Options[0]}</label><br/>
          <input onClick={ () => confirmaR(Options[1]) } className='radioBtn' id="radioBtn2" name='radioBtn' type='button'/> <label>{Options[1]}</label><br/>
          <input onClick={ () => confirmaR(Options[2]) } className='radioBtn' id="radioBtn3" name='radioBtn' type='button'/> <label>{Options[2]}</label><br/>
          <input onClick={ () => confirmaR(Options[3]) } className='radioBtn' id="radioBtn4" name='radioBtn' type='button'/> <label>{Options[3]}</label><br/>
        </div>

        <div className='btnBox'>
            <button onClick={()=>navigate('/Home')} className='exitBtnC'>Exit</button>
        </div>

      </div>
      
      <div className='question'>

        <div className='porcent'>
          {`${Puntos} pts`}
        </div>

      </div>

    </div>

  </div>)
}

export default QuizFrame