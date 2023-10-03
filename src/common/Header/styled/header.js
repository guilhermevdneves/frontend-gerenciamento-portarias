import styled from 'styled-components'
import logo from '../../../assets/images/logo-ifsp.png'

export const Container = styled.header`
  border-bottom: 2px solid rgb(224, 224, 224, 0.6);
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  padding: 10px 55px;
`

export const Logo = styled.img.attrs({
  src: logo
})``

export const TitleContainer = styled.div`
  align-items: center;
  margin: auto;

  @media (max-width: 800px) {
    margin: 0 15px;
  }
`


export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  color: #fff
`

export const LogOutButton = styled.button`
  background-color: transparent;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  &:hover {
    cursor: pointer
  }
`;