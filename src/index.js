import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './common/AppRoute/components/AppRoute'
import App from './App'
import { Theme } from './assets/theme/Theme'
import { Header } from './common/Header/components/Header'
import { Footer } from './common/Footer/components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Theme>
      <AppRoute />

      <Header />

      <App />

      <Footer />
    </Theme>
  </React.StrictMode>
)
