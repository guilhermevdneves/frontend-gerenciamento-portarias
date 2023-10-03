import styled from 'styled-components'
import dots from '../../../assets/images/dots.png'

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: 768px) {
    flex: 1;
    width: unset;
  }
`

export const ContactInfo = styled.div`
  width: 100%;
`

export const ContactName = styled.h1`
  font-size: 22px;
  margin-bottom: 8px;
`
export const ContactNumber = styled.h2`
  font-size: 18px;
`

export const ContactEmail = styled.h3`
  margin-top: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGrey};
 
`

export const OptionsDots = styled.button`
  border: none;
  background: url(${dots});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25px;
  width: 25px;

  &:hover {
    cursor: ${props => (props.disabled ? 'none' : 'pointer')};
  }
`
export const OptionsModalContainer = styled.div`
  position: relative;
  width: 0;
  height: 0;
  right: 55px;
  bottom: 5px;
`
export const OptionsModal = styled.div`
  position: absolute;
`

export const Options = styled.div`
  display: flex;
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
`

export const Option = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`



