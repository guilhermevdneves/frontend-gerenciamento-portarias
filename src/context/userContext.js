import React, { useEffect, useState } from 'react'
import { getUserStorage, setUserStorage } from '../storage/authStorage'

export const authContext = React.createContext({})

export const useAuthContext = () => React.useContext(authContext)

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  const setToken = (payload) => {
    setUserStorage(payload);
    setAuthToken(payload)
  } 

  useEffect(() => {
    const user = getUserStorage();
    console.log('user', user)
    if(user) {
      setAuthToken(user);
    }
  },[]);

  return (
    <authContext.Provider value={{ authToken, setAuthToken: setToken }}>
      {children}
    </authContext.Provider>
  )
}
