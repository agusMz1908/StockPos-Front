import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import Login from './components/Login'
import HomeRoute from './components/HomeRoute'
import Terminales from './components/Terminales'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <HomeRoute />,
    },
    {
      path: '/terminales',
      element: <Terminales/>
    }
  ])

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
