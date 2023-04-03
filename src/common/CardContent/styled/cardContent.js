import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Description = styled.p`
  font-size: 16px;
  width: fit-content;
`
export const DashedBorder = styled.div`
  height: 1px;
  flex: 1;
  margin: 0 10px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.primary};
`
export const Status = styled.p`
  font-size: 16px;
  color: red;
  width: fit-content;
`
