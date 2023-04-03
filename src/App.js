import React from 'react'
import { Home } from './routes/Home/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacts',
    element: <div>aoisndnaiodsnioan</div>
  }
])

function App () {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
