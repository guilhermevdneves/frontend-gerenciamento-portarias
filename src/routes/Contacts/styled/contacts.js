import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
`

export const NoContacts = styled.div`
  height: 52vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const NoContactsText = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`

export const ContactsContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 25px;
`

export const BackButton = styled(Link).attrs({
  to: '/'
})`
  font-size: 18px;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.primary};
`
