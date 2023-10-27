import React from 'react'
import { Container, Logo, TitleContainer, Title, LogOutButton } from '../styled/header'
import { useAuthContext } from '../../../context/authContext'
import { isUserLoggedIn } from '../../../utils/isUserLoggedIn'
import MediaQuery from 'react-responsive';
export function Header () {
  const auth = useAuthContext()
  const isUserLogged = isUserLoggedIn(auth)

  return (
    <Container>
      <Logo />

      <MediaQuery minWidth={950}>
        <TitleContainer>
          <Title>Portal para gerenciamento de portarias</Title>
        </TitleContainer>
      </MediaQuery>

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
