import React from 'react'
import {
  Container,
  Title,
  Input,
  InputContainer,
  FormBox,
  Form,
  UnathenticatedOption
} from '../styled/login'
import { SecondaryButton } from '../../../common/SecondaryButton/components/SecondaryButton'
import { checkIfLoginTryIsValid } from '../../../utils/checkIfLoginTryIsValid'
import { useAuthContext } from '../../../context/authContext'
import { api } from '../../../services/api'
import { UNAUTHENTICATED } from '../../../constants/unauthenticated'

export function Login () {
  const { setAuthToken } = useAuthContext()

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const username = e.target[0].value
      const password = e.target[1].value
      const credentials = {
        password,
        username
      }

      const isValid = await checkIfLoginTryIsValid(credentials)

      if (isValid) {
        const response = await api.post('/login', credentials)
        setAuthToken(response.data)
      } else {
        alert('ERROR!')
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  
  const loginWithoutAuthentication = () => { setAuthToken(UNAUTHENTICATED) }

  return (
    <Container>
      <FormBox>
        <Title>Autenticar</Title>

        <Form onSubmit={e => handleSubmit(e)}>
          <InputContainer>
            <Input placeholder='Login' name='login' />

            <Input placeholder='Senha' name='password' />
          </InputContainer>

          <SecondaryButton title='Logar' />
        </Form>

        <UnathenticatedOption>
          <Title>Ou</Title>

          <SecondaryButton title='Entrar sem login' onClick={loginWithoutAuthentication} />
        </UnathenticatedOption>
        
      </FormBox>
    </Container>
  )
}
