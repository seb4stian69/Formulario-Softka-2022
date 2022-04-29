import React from 'react'
import { useMyContext } from '../Context/contextContainer'
import {useNavigate} from 'react-router-dom'
import {user} from './0_mainExport'
import {Formik, Form, Field} from 'formik'

function Loguin() {

  const {setUsername} = useMyContext()
  const navigate = useNavigate()

  return (<div>

    <Formik 
    
      initialValues={{
        nombre: ''
      }}

      onSubmit={(values) => {

        if(values.nombre.length !== 0){
          setUsername(values.nombre)
          console.log(values.nombre)
          navigate('/Home')
        }else{
          alert('Debes ingresar tu nombre para acceder a app')
        }

      }}

    >

      {
        ({handleSubmit}) => (
          <Form className='form' onSubmit={handleSubmit}>

          <Field className='inputText' name='nombre' placeholder='Ingresa tu nombre' />
          <div className='btnBox'>
            <button type='submit' className='btnSend'>Send</button>
            <button type='reset' className='btnClear'>Clear</button>
          </div>
          
          </Form>
        )
      }

    </Formik>

  </div>)
  
}

export default Loguin