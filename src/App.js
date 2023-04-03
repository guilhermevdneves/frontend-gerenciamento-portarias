import React from 'react'
import { Home } from './routes/Home/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacts } from './routes/Contacts/components/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacts',
    element: <Contacts />
  }
])

function App () {
  return (
    <div style={{ height: '100%' }} className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
