import React from 'react'
import { Banner, ErrorArrow } from '../styled/errorBanner'

export function ErrorBanner(props) {
  return (
    <Banner>
      <ErrorArrow />
      Preencha este campo corretamente.
    </Banner>
  )
}
