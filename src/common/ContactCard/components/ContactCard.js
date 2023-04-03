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

export function ContactCard ({ contact }) {
  const [showOptions, setShowOptions] = useState(false)
  const [openEditContactModal, setOpenEditContactModal] = useState(false)

  const handleDelete = () => {
    alert('deleting')
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
          onSubmit={() => alert('Editing')}
          onClose={() => setOpenEditContactModal(false)}
          title='Edit contact'
          buttonName='Save'
        />
      )}
    </Container>
  )
}
