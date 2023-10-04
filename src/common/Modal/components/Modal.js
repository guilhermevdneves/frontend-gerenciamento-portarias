import React from 'react';
import { Container, Modal as ModalContainer, Title, Content, ButtonContainer, TextContainer } from '../styled/modal';
import { Button } from '../../Button/components/Button';
import { SecondaryButton } from '../../SecondaryButton/components/SecondaryButton';

function Modal({handleCancel, handleDelete}) {
  return (
    <Container>
      <ModalContainer>
        <TextContainer>
          <Title>Deseja realmente excluir a portaria?</Title>
          <Content>Caso confirme, a portaria será deletada permanentemente.</Content>
        </TextContainer>

        <ButtonContainer>
          <Button onClick={handleCancel}  title="Cancelar" />
          <SecondaryButton onClick={handleDelete} title="Excluir"/>
        </ButtonContainer>
      </ModalContainer>
    </Container>
  );
}

export default Modal