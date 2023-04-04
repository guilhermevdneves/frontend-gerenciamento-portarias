import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './common/AppRoute/components/AppRoute'
import App from './App'
import { Theme } from './assets/theme/Theme'
import { Header } from './common/Header/components/Header'
import { Footer } from './common/Footer/components/Footer'
import { AuthContextProvider } from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Theme>
      <AppRoute />

      <Header />

      <AuthContextProvider>
        <App />
      </AuthContextProvider>

      <Footer />
    </Theme>
  </React.StrictMode>
)
