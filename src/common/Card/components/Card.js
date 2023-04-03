import React from 'react'
import {
  Container,
  Title,
  Bar,
  ButtonContainer,
  ContentContainer
} from '../styled/card'
import { Button } from '../../Button/components/Button'

export function Card ({ title, content, disabled = false }) {
  return (
    <Container>
      <Title>{title}</Title>

      <Bar color={'red'} />
      <ContentContainer></ContentContainer>

      <Bar color={'#5514b4'} />
      <ButtonContainer>
        <Button title='Manage' disabled={disabled} />
      </ButtonContainer>
    </Container>
  )
}
