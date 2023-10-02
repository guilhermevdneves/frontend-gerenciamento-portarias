import React from 'react'
import { Container, Logo, TitleContainer, Title } from '../styled/header'

export function Header () {
  return (
    <Container>
      <Logo />

      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>
    </Container>
  )
}
