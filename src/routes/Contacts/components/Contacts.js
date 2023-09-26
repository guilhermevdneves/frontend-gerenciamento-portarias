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
import { PortariasModal } from '../../../common/PortariasModal/components/PortariasModal'
import { ContactCard } from '../../../common/ContactCard/components/ContactCard'
import { isContactValid } from '../../../utils/checkIfContactIsValid'
import { useAuthContext } from '../../../context/authContext'
import {  useParams } from 'react-router-dom';
import { addContact, getContacts } from '../../../services/contacts'
import { formatContactFromEvent } from '../../../utils/formatContactFromEvent'

export function Contacts () {
  const [contacts, setContacts] = useState([])
  const [openAddContactModal, setOpenAddContactModal] = useState(false)
  const { authToken } = useAuthContext()

  const {number: selectedNumber} = useParams();

  const handleFetchContacts = async () => {
    try {
      const response = await getContacts(authToken, selectedNumber);

      setContacts(response.data)
    } catch (err) {
      alert('Error!')
    }
  }

  const handleAddContact = async e => {
    try {
      e.preventDefault()

      const newContact = formatContactFromEvent(e)
      const isValid = await isContactValid(newContact);
      
      if (!isValid.errorMessage) {
        await addContact(authToken, selectedNumber, newContact);

        handleFetchContacts()
        setOpenAddContactModal(false)
      } else {
        alert(isValid.errorMessage)
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
        <PortariasModal
          onSubmit={e => handleAddContact(e)}
          onClose={() => setOpenAddContactModal(false)}
          title='Add new contact'
          buttonName='Add contact'
        />
      )}
    </Container>
  )
}
