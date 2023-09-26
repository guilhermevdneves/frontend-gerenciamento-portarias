import styled from 'styled-components'

export const Container = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 8px 10px;
  min-width: 100px;
  text-decoration: none;
  font-size: 16px

  &:hover {
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
  }
`
