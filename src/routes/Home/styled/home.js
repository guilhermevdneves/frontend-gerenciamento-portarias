import styled from 'styled-components'
import gLogo from '../../../assets/images/gartner-logo.svg'

export const Container = styled.div`
  margin-bottom: 100px;
`
export const Test = styled.div`
  display: flex;
  
  > :first-child {
    margin-right: 15px;
  }
`
export const Portarias = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 70vh;
  box-sizing: border-box;
  
  > section {
    margin-bottom: 25px; /* Ajuste o valor conforme necessário */
  }
`

export const WarningMessage = styled.p`
 color: ${({ theme }) => theme.colors.primary};
 font-size: 24px;
 font-weight: bold;
`


export const GartnerBanner = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 16px 26px;
  background: linear-gradient(90deg, #eef0fa 0, #eafcff 100%); ;
`

export const Description = styled.div`
  margin-top: 15px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`

export const PortariaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 25px;
  margin: auto;
  margin-top: 40px;
  max-width: 90%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GartnerBannerContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 70%;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    width: 90%;
  }
`

export const GartnerLogo = styled.img.attrs({
  src: gLogo
})`
  margin: 0;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`

export const GartnerText = styled.p`
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`
export const GartnerLink = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
`

export const NumbersTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
`
export const NumbersTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
`

export const NumbersContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`

export const PrimaryButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  font-size: 16px;
  width: fit-content;

  &:hover  {
    cursor: pointer;
  }

`