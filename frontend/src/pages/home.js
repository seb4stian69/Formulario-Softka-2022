import React from 'react'
import { useMyContext } from '../Context/contextContainer'
import {useNavigate} from 'react-router-dom'


function Home() {

  const navigate = useNavigate()
  const {User} = useMyContext()

  return (<div className='home'>
    
    <button onClick={() => navigate('/Quiz')} className='start'>Start Quiz</button>
    <button onClick={() => navigate('/Loguin')} className='exitBtnD'>Exit</button>
    <button onClick={() => navigate('/History')} className='history'>Ir al historial</button>

  </div>)
}

export default Home