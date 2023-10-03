import React from 'react'
import { Container, Logo, TitleContainer, Title, LogOutButton } from '../styled/header'
import { useAuthContext } from '../../../context/authContext'
import { isUserLoggedIn } from '../../../utils/isUserLoggedIn'

export function Header () {
  const auth = useAuthContext()
  const isUserLogged = isUserLoggedIn(auth)

  return (
    <Container>
      <Logo />

      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>

        {auth.authToken &&
          <LogOutButton
            onClick={() => auth.setAuthToken(null)}
          >
            {isUserLogged ? 'Sair' :  'Entrar' }
          </LogOutButton>
        }
        
    </Container>
  )
}
