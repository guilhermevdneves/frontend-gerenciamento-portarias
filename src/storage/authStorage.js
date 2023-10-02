const USER ='user'

export const getUserStorage = () => {
  return  JSON.parse(sessionStorage.getItem(USER));
}

export const setUserStorage = (payload) => {
  sessionStorage.setItem(USER, JSON.stringify(payload));
}