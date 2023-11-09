import styled from 'styled-components'

export const Container = styled.button`
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  min-width: 100px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
  
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`
