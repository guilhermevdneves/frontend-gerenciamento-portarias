import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    109.8deg,
    rgb(62, 5, 116) -5.2%,
    rgb(41, 14, 151) -5.2%,
    rgb(216, 68, 148) 103.3%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Title = styled.h2`
  font-size: 28px;
  padding-bottom: 30px;
  font-weight: 500;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 16px;
  min-width: 400px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`
