import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    primary: '#199C19',
    grey: '#434343;',
    red: 'red',
    lightGrey: '#d9d9d9',
    primaryGradient: 'linear-gradient(90deg, #5514b4 50%, #7e2ec6 100%)',
    secondaryGradient: 'linear-gradient(90deg,#eef0fa 0,#eafcff 100%)'
  }
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
