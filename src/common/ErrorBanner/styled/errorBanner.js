import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  background-color: #ff0000;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
`;

export const ErrorArrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ff0000; 
  top: -10px;
  left: calc(50% - 10px);
`;