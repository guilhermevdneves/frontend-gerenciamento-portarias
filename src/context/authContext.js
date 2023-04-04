import React, { useState } from 'react'

export const authContext = React.createContext({})

export const useAuthContext = () => React.useContext(authContext)

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  return (
    <authContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </authContext.Provider>
  )
}
