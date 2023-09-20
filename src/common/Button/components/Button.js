import React from 'react'
import { Container } from '../styled/button'

export function Button ({ title, disabled = false, ...rest }) {
  return <Container disabled={disabled} {...rest}>{title}</Container>
}
