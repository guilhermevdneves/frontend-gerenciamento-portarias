import React, { useEffect, useState } from 'react'


import {
  Container,
  Title,
  TitleContainer,
  PortariaContainer,
  CriarPortaria
} from '../styled/home'
import { Portaria } from '../../../common/Portaria/components/Portaria'
import { api } from '../../../services/api'
import { PortariasModal } from '../../../common/PortariasModal/components/PortariasModal';

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

      <PortariaContainer>
        <CriarPortaria onClick={criarNovaPortaria}>
          + Portaria
        </CriarPortaria>
    

        {portarias.map(portaria => 
          <Portaria
            portarias={portarias}
            key={portaria.id}
            dadosPortaria={portaria}
            title='Anexo'
            disabled
            content={<p>Conteúdo indisponível</p>}
          />
        )}
      </PortariaContainer>
      
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
