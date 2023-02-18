import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Login = () => {

  const navegar = useNavigate();

  const ingresoUser = Yup.object().shape({
    nombre: Yup.string()
                    .required('El usuario es obligatorio'),
    password: Yup.string()
                    .required('El password es obligatorio')
  })

  const verifyUser = async (valores) => {
    try {
      const url = 'http://localhost:3000/api/login'

      const token = localStorage.getItem('token');
      console.log(token)
      const response = await(fetch(url, {
        method: 'POST',
        body: JSON.stringify(valores),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }))
      console.log(response)
      const resultado = await response.json()
      localStorage.setItem("token", resultado.token);
      console.log(resultado)
      
      navegar('/home')

    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className="w-screen h-screen flex  items-center justify-center">
      <div className="w-1/4 flex flex-col bg-green-100 border-l-green-500 border-l-[12px] p-4">
        <h1 className='font-bold text-3xl pb-5 text-center text-black py-1 hover:text-green-500'>INICIAR SESION</h1>

        <Formik
          initialValues={{
            nombre: '',
            password: ''
          }}

          onSubmit={async(valores, {resetForm}) => {
            await verifyUser(valores)

            resetForm()
          }}
          validationSchema={ingresoUser}
        >

        {({errors, touched}) => {
          return (
            <Form className='flex flex-col'>
              <div className='pb-5'>
                <label className="text-black font-bold text-2xl" htmlFor="nombre">Usuario</label>
                <Field 
                  type="text"
                  className="mt-2 block w-full p-3 bg-green-200 border-l-green-500 border-l-[12px]"
                  placeholder="Nombre de Usuario"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? ( 
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>

              <div>
              <label className="text-black font-bold text-2xl" htmlFor="password">Password</label>
              <Field 
                  type="text"
                  className="mt-2 block w-full p-3 bg-green-200 border-l-green-500 border-l-[12px]"
                  placeholder="Password"
                  name="password"
                />
                {errors.password && touched.password ? ( 
                  <Alerta>{errors.password}</Alerta>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-1/4 bg-green-500 hover:bg-green-700 border-green-500 font-bold py-3 my-3 px-4 mt-6 self-center text-white hover:text-white"
              >
                LOGIN
              </button>
            </Form>
          )
        }}
        </Formik>
      </div>  
    </div>
  )
}

export default Login