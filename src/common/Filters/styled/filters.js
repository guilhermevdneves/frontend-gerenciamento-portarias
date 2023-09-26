import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: scroll;
  width: 100%;
  display: flex;
  padding: 0 15px;
  padding-bottom: 15px;

  button {
    margin-right: 15px;

  }
`

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  margin: 0 15px;

  &:disabled {
    color: rgb(128, 128, 128) !important;
    background-color: 'rgb(240, 240, 240, 0.6)'
  }
`;

export const FiltersTitle = styled.h1`
  font-size: 20px;
`;

