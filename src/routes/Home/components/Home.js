import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  TitleContainer,
  PortariaContainer,
  PrimaryButton,
  Test,
  Portarias,
  WarningMessage
} from '../styled/home'
import { Portaria } from '../../../common/Portaria/components/Portaria'
import { api } from '../../../services/api'
import { PortariasModal } from '../../../common/PortariasModal/components/PortariasModal';
import { Filters } from '../../../common/Filters/components/Filters';
import { camposFiltros } from '../../../constants/camposFiltros'

export function Home (props) {
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
  }

  const buscarPorString = (portaria, field) => {
    const valorDaPortaria = portaria[field.value].toLowerCase();
    const valorDoInput = field.filterText ? field.filterText.toLowerCase() : null;

    return valorDoInput && valorDaPortaria.includes(valorDoInput);
  }

  const buscarPorData = (portaria, field) => {
    const valorDaPortaria = portaria[field.value].toLowerCase();
    const valorDoInput = field.filterText ? field.filterText.toLowerCase() : null;

    return valorDoInput && valorDaPortaria.includes(valorDoInput);
  }
  

  const buscarPorFiltros = () => {
    const result = portarias.filter(portaria => {
      const filtros = fields.map(field => {
        if(field.type === 'string') {
          return buscarPorString(portaria, field)
        }

        return null
      });
    
      const resultadoFiltro = filtros.some(filtro => filtro === false)

      return !resultadoFiltro
   })

   setFilteredPortarias(() => result);
  }
  
  const cleanFilters = (e) => {
    e.preventDefault();

    setFields((prevState) => prevState.map(filtro => {
      delete filtro.filterText;
      return filtro;
    })); 
    
    setFilteredPortarias([]); // Você pode manter este estado se quiser limpar os resultados filtrados
  }

  useEffect(() => {
    buscarPorFiltros();
  }, [fields])

  return (
    <Container>
      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>



      <PortariaContainer>
        <PrimaryButton onClick={criarNovaPortaria}>
          + Portaria
        </PrimaryButton>
        
        <Link to={'/servidores'}>
          <PrimaryButton>
            Adicionar servidores
          </PrimaryButton>
        </Link>

        <Test>
          <Filters cleanFilters={cleanFilters} fields={fields} handleChangeFilter={handleChangeFilter}/>
          
          <Portarias>
            {(!fiteredPortarias.length && !fields.some(field => field.filterText && field.filterText.length)) ?
              <Fragment>
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
                {
                  !portarias.length &&
                  <WarningMessage>Ops... Não há portarias cadastradas!</WarningMessage>
                }
                </Fragment>
              :
              <Fragment>
                {fiteredPortarias.map(portaria => 
                  <Portaria
                    portarias={portarias}
                    key={portaria.id}
                    dadosPortaria={portaria}
                    title='Anexo'
                    disabled
                    content={<p>Conteúdo indisponível</p>}
                  />
                )}
                {
                  !fiteredPortarias.length &&
                  <WarningMessage>Ops... Não achamos essa portaria!</WarningMessage>
                }
              </Fragment>
            }

          </ Portarias>
        </Test>
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
