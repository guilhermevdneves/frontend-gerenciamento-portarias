import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`

/*
.footer {
  background-color: white;
  padding: 15px 0;
  position: sticky;
  bottom: 0;
  width: 100%;
}

.footer__container__text {
  margin-bottom: 0;
}

@media screen and (max-width: 1205px) {
  .footer__container {
    text-align: center;
  }
}

*/
