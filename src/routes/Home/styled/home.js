import styled from 'styled-components'
import background from '../../../assets/images/background.png'
import gLogo from '../../../assets/images/gartner-logo.svg'

export const Container = styled.div`
  margin-bottom: 100px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 95px 0;

  @media (max-width: 800px) {
    margin: 0 15px;
  }
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

export const Title = styled.h1`
  margin-top: 15px;
  font-weight: 800;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
`
export const PortariaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 25px;
  margin: auto;
  margin-top: 40px;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
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

export const CriarPortaria = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  font-size: 16px;
  width: 150px;

  &:hover  {
    cursor: pointer;
  }

`