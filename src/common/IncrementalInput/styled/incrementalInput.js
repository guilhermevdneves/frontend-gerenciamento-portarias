import styled from 'styled-components'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background: transparent;
  border: 0;

  &:hover {
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
  }
`

export const AddButton = styled(IoIosAddCircleOutline).attrs(props => ({
  size: 24,
  style: {
    color: props.theme.colors.primary
  } 
}))`
  background: transparent;
  border: 0;

  &:hover {
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
  }
`

export const RemoveButton = styled(IoIosRemoveCircleOutline).attrs(props => ({
  size: 24,
}))`
  background: transparent;
  border: 0;

  &:hover {
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
  }
`
