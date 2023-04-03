import React from 'react'
import { Container } from '../styled/secondaryButton'

export function SecondaryButton ({ title, onClick }) {
  return <Container onClick={onClick}>{title}</Container>
}
