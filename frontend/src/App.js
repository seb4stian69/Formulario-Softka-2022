import React from 'react'
import {History, Homepage, Loguin, QuizFrame} from './pages/0_mainExport'
import {Routes, Route} from 'react-router-dom'
import {ContextProvider} from './Context/contextContainer'
import {Toaster} from 'react-hot-toast'
import './app.css'

/**
 * @import {quizQuestion} give me a array of question, this array have one methon called [isCorrectAnswer]
 */

function App() {
  return <div>
    <ContextProvider>

      <Routes>

      <Route path='/' element={<Loguin/>} />

      <Route path='/Loguin'   element={<Loguin/>} />
      <Route path='/Home'     element={<Homepage/>} />
      <Route path='/Quiz'     element={<QuizFrame/>} />
      <Route path='/History'  element={<History/>} />

      </Routes>

    </ContextProvider>
  </div>
}

export default App