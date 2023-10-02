import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { isSameDay } from 'date-fns';
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
import { dateMask } from '../../../utils/dateMask';
import { isDateValid } from '../../../utils/isDateValid';
import { convertDateMaskToDate } from '../../../utils/covertDateMaskToDate';

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

        if(
          prevState[indexAtual].type === 'string' ||
          prevState[indexAtual].type === 'servidores'
        ) {
          newArray[indexAtual].filterText = valor;
        } else if(prevState[indexAtual].type === 'date') {
          newArray[indexAtual].filterText = dateMask(valor);
        }
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
    if(!isDateValid(field.filterText)) {
      return null;
    }

    const valorDoInput = convertDateMaskToDate(field.filterText);
    const valorDaPortaria = new Date(portaria[field.value]);
    
    return isSameDay(valorDoInput, valorDaPortaria);
  }

  const buscarPorServidores = (portaria, field) => {
    const valorDoInput = field.filterText ? field.filterText.toLowerCase() : null;

    return valorDoInput && portaria[field.value].some(servidor => servidor.nome.toLowerCase().includes(valorDoInput));
  }
  
  const buscarPorFiltros = () => {
    const result = portarias.filter(portaria => {
      const filtros = fields.map(field => {
        if(field.type === 'string') {
          return buscarPorString(portaria, field)
        } else if(field.type === 'date') {
          return buscarPorData(portaria, field)
        }  else if(field.type === 'servidores') {
          return buscarPorServidores(portaria, field)
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
          <Filters 
            cleanFilters={cleanFilters}
            fields={fields}
            handleChangeFilter={handleChangeFilter}
          />
          
          <Portarias>
            {(!fiteredPortarias.length && !fields.some(field => field.filterText && field.filterText.length)) ?
              <Fragment>
                {portarias.map(portaria => 
                  <Portaria
                    portarias={portarias}
                    key={portaria.id}
                    dadosPortaria={portaria}
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
