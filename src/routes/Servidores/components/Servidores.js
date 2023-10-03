import React, { useEffect, useState } from 'react'
import {
  Container,
  TitleContainer,
  Title,
  NoContacts,
  NoContactsText,
  BackButton,
  ServidoresContainer
} from '../styled/servidores'
import { SecondaryButton } from '../../../common/SecondaryButton/components/SecondaryButton'
import { ServidorCard } from '../../../common/ContactCard/components/ServidorCard'
import { api } from '../../../services/api'
import { isServidorValid } from '../../../utils/checkIfContactIsValid'
import { useAuthContext } from '../../../context/authContext'
import { ServidoresModal } from '../../../common/ServidoresModal/components/ServidoresModal'

export function Servidores () {
  const [servidores, setServidores] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const { authToken } = useAuthContext()

  const handleFetchServidores = async () => {
    try {
      const response = await api.get('/users', {
        headers: { Authorization: authToken.token }
      })

      console.log(response);

      setServidores(response.data)
    } catch (err) {
      alert('Error!')
    }
  }

  const handleAddContact = async e => {
    try {
      e.preventDefault()
      const name = e.target[0].value
      const email = e.target[1].value

      const newContact = {
        email,
        name
      }
      console.log(isServidorValid(newContact))

      if (isServidorValid(newContact)) {
        await api.post(
          '/user',
          {
            name,
            email
          },
          {
            headers: { Authorization: authToken.token }
          }
        )

        handleFetchServidores()
      } else {
        alert('Os dados estão inválidos!')
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    handleFetchServidores()
  }, [])

  return (
    <Container>
      <TitleContainer>
        <Title>Servidores</Title>
        <BackButton>Voltar</BackButton>
      </TitleContainer>

      {!servidores.length ? (
        <NoContacts>
          <NoContactsText>Não há servidores cadastrados</NoContactsText>
          <SecondaryButton
            onClick={() => setOpenModal(true)}
            title='Adicionar Servidor'
          />
        </NoContacts>
      ) : (
        <ServidoresContainer>
          <SecondaryButton
            title='Adicionar Servidor'
            onClick={() => setOpenModal(true)}
          />
          {servidores.map(contact => (
            <ServidorCard
              handleFetchContacts={handleFetchServidores}
              contact={contact}
              key={contact.id}
            />
          ))}
        </ServidoresContainer>
      )}

      { openModal &&
        <ServidoresModal
          title="Adicionar servidor"
          onClose={() => setOpenModal(false)}
          onSubmit={handleAddContact}
          buttonName="Adicionars"
        />
      }
    </Container>
  )
}
