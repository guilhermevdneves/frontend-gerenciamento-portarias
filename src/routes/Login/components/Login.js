import React from 'react'
import {
  Container,
  Title,
  Input,
  InputContainer,
  FormBox,
  Form
} from '../styled/login'
import { SecondaryButton } from '../../../common/SecondaryButton/components/SecondaryButton'
import { checkIfLoginTryIsValid } from '../../../utils/checkIfLoginTryIsValid'
import { useAuthContext } from '../../../context/authContext'
import { api } from '../../../services/api'

export function Login (props) {
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

      if (checkIfLoginTryIsValid(credentials)) {
        const response = await api.post('/login', credentials)
        setAuthToken(response.data)
      } else {
        alert('ERROR!')
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <Container>
      <FormBox>
        <Title>Log in</Title>

        <Form onSubmit={e => handleSubmit(e)}>
          <InputContainer>
            <Input placeholder='Login...' name='login' />

            <Input placeholder='Password...' name='password' />
          </InputContainer>

          <SecondaryButton title='Log in' />
        </Form>
      </FormBox>
    </Container>
  )
}
