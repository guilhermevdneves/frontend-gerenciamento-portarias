import styled from 'styled-components'


export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  width: 70vw;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
`

export const Content = styled.p`
   font-size: 18px;
`

export const ButtonContainer = styled.div`
  > :first-child {
    margin-right: 15px;
  }
`

export const TextContainer = styled.div`
  > * {
    margin-bottom: 15px;
  }
`
