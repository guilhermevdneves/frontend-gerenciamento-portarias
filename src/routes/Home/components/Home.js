import React, { useEffect, useState } from 'react'


import {
  Container,
  Title,
  TitleContainer,
  CardContainer,
  CriarPortaria
} from '../styled/home'
import { Card } from '../../../common/Card/components/Card'
import { api } from '../../../services/api'
import { PortariasModal } from '../../../common/ContactsModal/components/ContactsModal';

export function Home () {
  const [portarias, setPortarias] = useState([]);
  const [openAddContactModal, setOpenAddContactModal] = useState(false)

  const fetchData = async () => {
    const response  = await api.get('/portarias');


    setPortarias(response.data);
  }

  const criarNovaPortaria = async () => {
    setOpenAddContactModal(true);
  }

  useEffect(() => {fetchData()}, []);
 
  return (
    <Container>
      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>

      <CriarPortaria onClick={criarNovaPortaria}>+ Portaria</CriarPortaria>
    
      <CardContainer>
        {portarias.map(portaria => 
          <Card
            dadosPortaria={portaria}
            title='Anexo'
            disabled
            content={<p>Conteúdo indisponível</p>}
          />
        )}
      </CardContainer>

      
      {openAddContactModal && (
        <PortariasModal
          fetchData={fetchData}
          onClose={() => setOpenAddContactModal(false)}
          title='Adicionar portaria'
          buttonName='Adicionar'
        />
      )}
    </Container>
  )
}
