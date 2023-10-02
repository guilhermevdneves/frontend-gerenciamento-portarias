export const isUserLoggedIn = (authContext) => {
  return authContext &&
    authContext.authToken &&
    authContext.authToken.token
} 