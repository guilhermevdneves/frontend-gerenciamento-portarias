import React from 'react'
import { Home } from './routes/Home/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacts } from './routes/Contacts/components/Contacts'
import { Login } from './routes/Login/components/Login'
import { useAuthContext } from './context/authContext'

const Authenticatedroutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacts',
    element: <Contacts />
  }
])

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])

function App () {
  const { authToken } = useAuthContext()

  return (
    <div style={{ height: '100%' }} className='App'>
      <RouterProvider router={!authToken ? routes : Authenticatedroutes} />
    </div>
  )
}

export default App
