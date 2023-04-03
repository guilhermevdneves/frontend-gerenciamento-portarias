import React from 'react'
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

export function ContactsModal ({ title, onClose, onSubmit, buttonName }) {
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
            <Input placeholder='Name...' />

            <InputDescription>Number</InputDescription>
            <Input placeholder='Number...' />
          </InputContainer>

          <SecondaryButton title={buttonName} />
        </form>
      </Modal>
    </Container>
  )
}
