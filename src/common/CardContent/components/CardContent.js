import React from 'react'
import {
  Container,
  Description,
  DashedBorder,
  Status
} from '../styled/cardContent'

export function CardContent ({ description, status }) {
  return (
    <Container>
      <Description>{description}</Description>
      <DashedBorder />
      <Status>{status}</Status>
    </Container>
  )
}
