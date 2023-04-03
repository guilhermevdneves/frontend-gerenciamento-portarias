import React from 'react'
import { Container } from '../styled/button'

export function Button ({ title, disabled = false }) {
  return <Container disabled={disabled}>{title}</Container>
}
