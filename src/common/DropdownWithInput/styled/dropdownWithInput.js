import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:disabled {
    color: rgb(128, 128, 128) !important;
    background-color: 'rgb(240, 240, 240, 0.6)'
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
  }
`;