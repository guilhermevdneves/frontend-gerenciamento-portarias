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
import { camposFiltros } from '../../../constants/camposFiltros'

export function Home () {
  const [portarias, setPortarias] = useState([]);
  const [fiteredPortarias, setFilteredPortarias] = useState([]);
  const [openAddContactModal, setOpenAddContactModal] = useState(false)
  const [fields, setFields] = useState(camposFiltros);

  const fetchData = async () => {
    const response  = await api.get('/portarias');

    setPortarias(response.data);
    setFilteredPortarias(response.data);
  }

  const criarNovaPortaria = async () => {
    setOpenAddContactModal(true);
  }

  useEffect(() => {fetchData()}, []);

  const handleChangeFilter = (campo, valor) => {
    setFields(prevState => {
      const newArray = [...prevState];
      const indexAtual = newArray.findIndex(item => item.value === campo);
      
      if (indexAtual !== -1) {
        newArray[indexAtual].filterText = valor;
      }

      return newArray;
    });

   
console.log(fields);
    const result = portarias.filter(portaria => {
      return fields.some(field => {
        return field.filterText ? field.filterText.toLowerCase() : ''.includes(portaria[field.value].toLowerCase().includes())
      }) 
    })

    console.log(result, 'result')
  }
  return (
    <Container>
      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>

      <Filters fields={fields} handleChangeFilter={handleChangeFilter}/>


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
