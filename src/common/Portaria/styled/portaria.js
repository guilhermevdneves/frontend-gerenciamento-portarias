import styled from 'styled-components'


export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 0.3fr;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  background-color: #FAFAF5;
  width: 100%;
  
`
export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
`

export const ConteudoTexto = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
  color: ${props => props.cor || 'black'};
  font-weight: ${props => props.cor ? 700 : 500} 
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  width: 100%;
`
export const LabelSituaçao = styled.div`
  height: 100%;
  background-color: red;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
  background-color: ${props => props.cor || 'black'};
`

export const ImagemPortaria = styled.img`
`

export const BotaoPortaria = styled.button`
  background-color: transparent;
  border: 0;
  
  &:hover {
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
  }
`

export const ContainerInfo = styled.div`
  padding: 25px;
`

export const ContainerPortaria = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 25px;
`

export const ContainerTitulo = styled.div`
`
