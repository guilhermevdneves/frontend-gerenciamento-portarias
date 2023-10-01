import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  padding-bottom: 15px;
  height: 100%;

  button {
    margin-bottom: 15px;
    margin-right: 15px;
  }
  
  > input {
    margin-bottom: 15px;
    margin-left: 0;
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
  margin-bottom: 25px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;
