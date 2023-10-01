import React, { useEffect, useState } from 'react'
import {
  Container,
  TitleContainer,
  Title,
  NoContacts,
  NoContactsText,
  BackButton,
  ContactsContainer
} from '../styled/servidores'
import { SecondaryButton } from '../../../common/SecondaryButton/components/SecondaryButton'
import { ContactCard } from '../../../common/ContactCard/components/ContactCard'
import { api } from '../../../services/api'
import { isContactValid } from '../../../utils/checkIfContactIsValid'
import { useAuthContext } from '../../../context/authContext'

export function Servidores () {
  const [contacts, setContacts] = useState([])
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
          '/contacts',
          {
            name,
            number
          },
          {
            headers: { Authorization: authToken }
          }
        )

        handleFetchContacts()
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
        <Title>Servidores</Title>
        <BackButton>Voltar</BackButton>
      </TitleContainer>

      {!contacts.length ? (
        <NoContacts>
          <NoContactsText>Não há servidores cadastrados</NoContactsText>
          <SecondaryButton
            title='Adicionar Servidor'
          />
        </NoContacts>
      ) : (
        <ContactsContainer>
          <SecondaryButton
            title='Adicionar Servidor'
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

    </Container>
  )
}
