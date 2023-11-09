import styled from 'styled-components';

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-320px')}; 
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: left 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 15px;

   button {
    width: 100%;
  }
  > button {
    margin-top: 25px;
  }
`;
