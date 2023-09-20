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
  padding: 10px 0;
`

export const Logo = styled.img.attrs({
  src: logo
})`
  margin: auto;
`
