import styled from 'styled-components'


export const SelectComponent = styled.select`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  font-size: 16px;

`

export const SelectOptionComponent = styled.option`
  padding: 15px;
  font-size: 16px;
`
