import React, { useEffect, useState } from 'react'
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
import { api } from '../../../services/api'
import { isContactValid } from '../../../utils/checkIfContactIsValid'
import { useAuthContext } from '../../../context/authContext'

export function Contacts () {
  const [contacts, setContacts] = useState([])
  const [openAddContactModal, setOpenAddContactModal] = useState(false)
  const { authToken } = useAuthContext()

  const handleFetchContacts = async () => {
    try {
      const response = await api.get('/contacts', {
        headers: { Authorization: authToken }
      })

      setContacts(response.data)
    } catch (err) {
      alert('Error!')
    }
  }

  const handleAddContact = async e => {
    try {
      e.preventDefault()
      const name = e.target[0].value
      const number = e.target[1].value

      const newContact = {
        number,
        name
      }
      console.log(isContactValid(newContact))

      if (isContactValid(newContact)) {
        await api.post(
          '/contact',
          {
            name,
            number
          },
          {
            headers: { Authorization: authToken }
          }
        )

        handleFetchContacts()
        setOpenAddContactModal(false)
      } else {
        alert('contact is invalid!')
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    handleFetchContacts()
  }, [])

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
            <ContactCard
              handleFetchContacts={handleFetchContacts}
              contact={contact}
              key={contact.id}
            />
          ))}
        </ContactsContainer>
      )}

      {openAddContactModal && (
        <ContactsModal
          onSubmit={e => handleAddContact(e)}
          onClose={() => setOpenAddContactModal(false)}
          title='Add new contact'
          buttonName='Add contact'
        />
      )}
    </Container>
  )
}
