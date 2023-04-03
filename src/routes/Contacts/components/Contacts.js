import React, { useState } from 'react'
import {
  Container,
  TitleContainer,
  Title,
  NoContacts,
  NoContactsText,
  BackButton,
  ContactsContainer
} from '../styled/contacts'
import { SecondaryButton } from '../../../common/SecondaryButton/components/SecondaryButton'
import { ContactsModal } from '../../../common/ContactsModal/components/ContactsModal'
import { ContactCard } from '../../../common/ContactCard/components/ContactCard'

export function Contacts () {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Name a', number: '(19) 992229179' },
    { id: 2, name: 'Name b', number: '(11) 959567370' }
  ])
  const [openAddContactModal, setOpenAddContactModal] = useState(false)

  return (
    <Container>
      <TitleContainer>
        <Title>Contacts</Title>
        <BackButton>Back</BackButton>
      </TitleContainer>

      {!contacts.length ? (
        <NoContacts>
          <NoContactsText>You have no contacts</NoContactsText>
          <SecondaryButton
            onClick={() => setOpenAddContactModal(true)}
            title='Add new contact'
          />
        </NoContacts>
      ) : (
        <ContactsContainer>
          <SecondaryButton
            onClick={() => setOpenAddContactModal(true)}
            title='Add new contact'
          />
          {contacts.map(contact => (
            <ContactCard contact={contact} key={contact.id} />
          ))}
        </ContactsContainer>
      )}

      {openAddContactModal && (
        <ContactsModal
          onSubmit={() => alert('Adding')}
          onClose={() => setOpenAddContactModal(false)}
          title='Add new contact'
          buttonName='Add contact'
        />
      )}
    </Container>
  )
}
