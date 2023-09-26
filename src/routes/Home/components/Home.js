import React, { useEffect, useState } from 'react'


import {
  Container,
  Title,
  TitleContainer,
  PortariaContainer,
   PrimaryButton
} from '../styled/home'
import { Portaria } from '../../../common/Portaria/components/Portaria'
import { api } from '../../../services/api'
import { PortariasModal } from '../../../common/PortariasModal/components/PortariasModal';
import { Filters } from '../../../common/Filters/components/Filters';

export function Home () {
  const [portarias, setPortarias] = useState([]);
  const [fiteredPortarias, setFilteredPortarias] = useState([]);

  const [openAddContactModal, setOpenAddContactModal] = useState(false)

  const fetchData = async () => {
    const response  = await api.get('/portarias');

    setPortarias(response.data);
    setFilteredPortarias(response.data);
  }

  const criarNovaPortaria = async () => {
    setOpenAddContactModal(true);
  }

  useEffect(() => {fetchData()}, []);

  const handleChangeFilter = (a, b) => {
    console.log(a, b);

  }
  
  return (
    <Container>
      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>

      <Filters handleChangeFilter={handleChangeFilter}/>

      <PortariaContainer>
        <PrimaryButton onClick={criarNovaPortaria}>
          + Portaria
        </PrimaryButton>
    
        {!fiteredPortarias.length ?
            portarias.map(portaria => 
              <Portaria
                portarias={portarias}
                key={portaria.id}
                dadosPortaria={portaria}
                title='Anexo'
                disabled
                content={<p>Conteúdo indisponível</p>}
              />
            )
          :
          fiteredPortarias.map(portaria => 
            <Portaria
              portarias={portarias}
              key={portaria.id}
              dadosPortaria={portaria}
              title='Anexo'
              disabled
              content={<p>Conteúdo indisponível</p>}
            />
          )
        }
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
