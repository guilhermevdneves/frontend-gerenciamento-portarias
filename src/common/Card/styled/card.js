import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  padding: 25px;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  width: 100%;
`

export const Bar = styled.div`
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  width: 100%;
`
export const ButtonContainer = styled.div`
  margin-top: 15px;
`
