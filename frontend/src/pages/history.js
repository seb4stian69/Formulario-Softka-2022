import React, { useEffect } from 'react'
import { useMyContext } from '../Context/contextContainer'
import {Link, useNavigate} from 'react-router-dom'

function History() {

  const {getHistory, Post} = useMyContext()
  const navigate = useNavigate()

  useEffect( () => {

    getHistory()

  }, [] )

  return (
    <div className="home">

      <button onClick={() => navigate('/Home')} className='exitBtnC exitH'>Salir</button>

      {
        <div className = 'historyHome'>
          {
          
          Post.map( history => (
            <div className="historyFetch" key={history._id}>
              <p>Username: {history.user}</p>
              <p>Score: {history.score}</p>
            </div>
          ))

        }
        
        </div>
      }
      
    </div>
  );
}

export default History