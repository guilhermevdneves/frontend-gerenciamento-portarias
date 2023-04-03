import styled from 'styled-components'

export const Container = styled.button`
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  background: transparent;
  border-radius: 5px;
  padding: 8px 10px;
  min-width: 100px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`
