import React from 'react'
import { Home } from './routes/Home/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacts } from './routes/Contacts/components/Contacts'
import { Login } from './routes/Login/components/Login'
import { useAuthContext } from './context/authContext';
import { StyleRouter } from './styled'
import { UNAUTHENTICATED } from './constants/unauthenticated'


const Authenticatedroutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'numbers/:number/contacts',
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
    <div className='App'>
      <StyleRouter>
        <RouterProvider router={(
          authToken && (authToken.token || authToken === UNAUTHENTICATED ))   ? Authenticatedroutes : routes} />
      </StyleRouter>
    </div>
  )
}

export default App
