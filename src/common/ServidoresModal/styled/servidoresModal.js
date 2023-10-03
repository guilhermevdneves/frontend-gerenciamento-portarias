import styled from 'styled-components'
import xIcon from '../../../assets/images/x.png'

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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ModalTitle = styled.h2`
  font-size: 28px;
  padding-bottom: 15px;
  font-weight: 500;
`

export const InputDescription = styled.label`
  font-size: 20px;
  padding-bottom: 15px;
`

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  border: none;
  background: url(${xIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 15px;
  width: 15px;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`

export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 16px;
  min-width: 400px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`
