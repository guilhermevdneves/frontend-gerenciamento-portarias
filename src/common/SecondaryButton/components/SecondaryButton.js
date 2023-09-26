import React from 'react'
import { Container } from '../styled/secondaryButton'

export function SecondaryButton ({ title, onClick, ...rest }) {
  return <Container onClick={onClick} {...rest}>{title}</Container>
}
