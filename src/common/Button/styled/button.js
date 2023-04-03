import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link).attrs({
  to: '/contacts'
})`
  color: white;
  background: ${props =>
    props.disabled
      ? 'rgb(85, 20, 180, 0.5)'
      : props.theme.colors.primaryGradient};
  border-radius: 5px;
  padding: 8px 10px;
  min-width: 100px;
  text-decoration: none;
  font-size: 16px

  &:hover {
    cursor: ${props => (props.disabled ? 'none' : 'pointer')};
  }
`
