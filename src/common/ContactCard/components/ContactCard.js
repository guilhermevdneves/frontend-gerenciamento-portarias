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
  OptionsDots
} from '../styled/contactCard'
import ClickAwayListener from 'react-click-away-listener'
import { ContactsModal } from '../../ContactsModal/components/ContactsModal'
import { api } from '../../../services/api'
import { isContactValid } from '../../../utils/checkIfContactIsValid'

export function ContactCard ({ contact, handleFetchContacts }) {
  const [showOptions, setShowOptions] = useState(false)
  const [openEditContactModal, setOpenEditContactModal] = useState(false)

  const handleDelete = async () => {
    const id = contact.id

    await api.delete(`/contacts/${id}`)

    handleFetchContacts()
  }

  const handleEdit = async e => {
    try {
      e.preventDefault()
      const id = contact.id
      const name = e.target[0].value
      const number = e.target[1].value

      const newContact = {
        number,
        name
      }
      console.log(isContactValid(newContact))
      if (isContactValid(newContact)) {
        await api.put(`/contacts/${id}`, {
          name,
          number
        })

        handleFetchContacts()
        setOpenEditContactModal(false)
      } else {
        alert('contact is invalid!')
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
        <ContactsModal
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
