import React from 'react'
import { Home } from './routes/Home/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './routes/Login/components/Login'
import { useAuthContext } from './context/authContext';
import { StyleRouter } from './styled'
import { UNAUTHENTICATED } from './constants/unauthenticated'
import { Servidores } from './routes/Servidores/components/Servidores';
import { Header } from './common/Header/components/Header';
import { Footer } from './common/Footer/components/Footer';

const Authenticatedroutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'servidores',
    element: <Servidores />
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
      <Header />

      <StyleRouter>
        <RouterProvider router={(
          authToken && (authToken.token || authToken === UNAUTHENTICATED ))   ? Authenticatedroutes : routes} />
      </StyleRouter>

      <Footer />
    </div>
  )
}

export default App
