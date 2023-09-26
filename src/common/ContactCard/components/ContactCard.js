import React, { useState } from 'react'

import {
  Container,
  ContactInfo,
  ContactName,
  ContactNumber,
  Options,
  OptionsModal,
  OptionsModalContainer,
  Option,
  OptionsDots,
  ContactEmail
} from '../styled/contactCard'
import ClickAwayListener from 'react-click-away-listener'
import { PortariasModal } from '../../PortariasModal/components/PortariasModal'
import { isContactValid } from '../../../utils/checkIfContactIsValid'
import { useAuthContext } from '../../../context/authContext'
import { useParams } from 'react-router-dom'
import { deleteContact, editContact } from '../../../services/contacts'
import { formatContactFromEvent } from '../../../utils/formatContactFromEvent'

export function ContactCard({ contact, handleFetchContacts }) {
  const [showOptions, setShowOptions] = useState(false)
  const [openEditContactModal, setOpenEditContactModal] = useState(false)
  const { authToken } = useAuthContext()
  const { number: selectedNumber } = useParams();

  const handleDelete = async () => {
    try {
      const id = contact.id

      await deleteContact(authToken, selectedNumber, id);

      handleFetchContacts()
    } catch (err) {
      console.log('err', err)
    }
  }

  const handleEdit = async e => {
    try {
      e.preventDefault()
      const id = contact.id

      const newContact = formatContactFromEvent(e, id);

      const isValid = await isContactValid(newContact);

      if (!isValid.errorMessage) {
        await editContact(authToken, selectedNumber, newContact);

        handleFetchContacts()
        setOpenEditContactModal(false)
      } else {
        alert(isValid.errorMessage)
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <Container>
      <ContactInfo>
        <ContactName>
        
          {contact.name ? contact.name : contact.number}
        </ContactName>
        
        <ContactNumber>{contact.number}</ContactNumber>


        {contact.email &&
          <ContactEmail>
            {contact.email}
          </ContactEmail>
        }

      </ContactInfo>

      <OptionsDots onClick={() => setShowOptions(true)} />

      {showOptions && (
        <ClickAwayListener onClickAway={() => setShowOptions(false)}>
          <OptionsModalContainer>
            <OptionsModal>
              <Options>
                <Option onClick={() => setOpenEditContactModal(true)}>
                  Edit
                </Option>
                <Option onClick={handleDelete}>Delete</Option>
              </Options>
            </OptionsModal>
          </OptionsModalContainer>
        </ClickAwayListener>
      )}

      {openEditContactModal && (
        <PortariasModal
          initialName={contact.name ?? ''}
          initialNumber={contact.number ?? ''}
          onSubmit={e => handleEdit(e)}
          onClose={() => setOpenEditContactModal(false)}
          title='Edit contact'
          buttonName='Save'
        />
      )}
    </Container>
  )
}
