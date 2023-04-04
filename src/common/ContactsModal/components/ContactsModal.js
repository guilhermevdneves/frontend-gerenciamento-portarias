import React, { useState } from 'react'
import {
  Container,
  Modal,
  InputDescription,
  Input,
  InputContainer,
  ModalTitle,
  CloseButton,
  HeaderContainer
} from '../styled/contactsModal'
import { SecondaryButton } from '../../SecondaryButton/components/SecondaryButton'

export function ContactsModal ({
  title,
  onClose,
  onSubmit,
  buttonName,
  initialName = '',
  initialNumber = ''
}) {
  const [name, setName] = useState(initialName)
  const [number, setNumber] = useState(initialNumber)

  return (
    <Container>
      <Modal>
        <HeaderContainer>
          <ModalTitle>{title}: </ModalTitle>

          <CloseButton onClick={onClose} />
        </HeaderContainer>

        <form onSubmit={onSubmit}>
          <InputContainer>
            <InputDescription>Name</InputDescription>
            <Input
              placeholder='Name...'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <InputDescription>Number</InputDescription>
            <Input
              placeholder='Number...'
              name='number'
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </InputContainer>

          <SecondaryButton title={buttonName} />
        </form>
      </Modal>
    </Container>
  )
}
