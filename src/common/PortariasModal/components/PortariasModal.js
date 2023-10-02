import React, { useState } from 'react'

import {
  Container,
  Modal,
  InputDescription,
  Input,
  InputContainer,
  ModalTitle,
  CloseButton,
  HeaderContainer,
  RadioButtonText,
  RadioButtonContainer,
  CheckboxButton,
  SelectOptionComponent,
  SelectComponent
} from '../styled/portariasModal'
import { SecondaryButton } from '../../SecondaryButton/components/SecondaryButton'
import { IncrementalInput } from '../../IncrementalInput/components/IncrementalInput';
import { IncrementalDropdown } from '../../IncrementalDropdown/components/IncrementalDropdown';
import { classificacaoPortaria } from '../../../constants/classificacaoPortaria';
import { situacaoPortariaInput } from '../../../constants/situacaoPortaria';
import { api } from '../../../services/api';
import { useAuthContext } from '../../../context/authContext';
import { alteracoesPortarias } from '../../../constants/alteracoesPortarias';
import { ErrorBanner } from '../../ErrorBanner/components/ErrorBanner';
import { dateMask } from '../../../utils/dateMask';
import { isDateValid } from '../../../utils/isDateValid';
import { convertDateMaskToDate } from '../../../utils/covertDateMaskToDate';
import { tiposDeAlteracoesPortaria } from '../../../constants/tiposDeAlteracoesPortaria';

export function PortariasModal({
  title,
  onClose,
  buttonName,
  fetchData
}) {
  const [assunto, setAssunto] = useState('');
  const [publicacao, setPublicacao] = useState('');
  const [validade, setValidade] = useState('');
  const [classificacao, setClassificacao] = useState(classificacaoPortaria[0].value);
  const [servidores, setServidores] = useState(['']);
  const [permanente, setPermanente] = useState(false);
  const [situacao, setSituacao] = useState(situacaoPortariaInput[0].value);
  const [linkPortaria, setLinkPortaria] = useState('');
  const [alteracoes, setAlteracoes] = useState([]);
  const [errors, setErrors] = useState(false);
  const { authToken } = useAuthContext()
  
 
  const handleChangeDate = (value) => {
    setPublicacao(dateMask(value))
  }

  const handleChangeValidade = (value) => {
    setValidade(dateMask(value))
  }

  const increaseAlteracoes = () => {
    setAlteracoes(prevState => {
      return [...prevState, {
        situacao: alteracoesPortarias[0].value
      }];
    });
  }

  const decreaseAlteracoes = () => {
    setAlteracoes(prevState => {
      return prevState.slice(0, -1);
    });
  }

  const setAnSpecificServidor = (value, index) => {
    setServidores(prevState => {
      const newState = [...prevState]; 

      newState[index] = value; 
    
      return newState;
    });
  }

  const setAnSpecificAlteracao = (value, index) => {
    setAlteracoes(prevState => {
      const newState = [...prevState];

      newState[index] = {
        ...newState[index],
        ...value
      };
    
      return newState;
    });
  }

  const increaseServidores = () => {
    setServidores(prevState => {
      return [...prevState, ''];
    });
  }

  const decreaseServidores = () => {
    setServidores(prevState => {
      return prevState.slice(0, -1);
    });
  }

  const handleOptionChange = (event) => {
    setClassificacao(event.target.value);
  };

  const handleSituacaoChange = (event) => {
    setSituacao(event.target.value);
  };

  function isGoogleDriveLink(url, input) {
    const driveLinkRegex = /^https:\/\/drive\.google\.com\/(?:open\?id=|file\/d\/)([a-zA-Z0-9_-]+)\/?/;
   
    if(driveLinkRegex.test(url)){
      setErrors(prevState => ({
        ...prevState,
        [input]: false
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        [input]: true
      }))
    }
  }

  const handleSave = async () => {
    const payload = {
      assunto,
      publicacao: convertDateMaskToDate(publicacao),
      link: linkPortaria,
      classificacao,
      validade: convertDateMaskToDate(validade),
      permanente,
      situacao,
      servidores: servidores.reduce((arr, servidor) => {
        if(servidor.length){
          arr.push({ nome: servidor, presidente: false})
        }
        return arr; 
      }, []),
      alteracoes: [],
    }
    
    const portariasToBeChanged = alteracoes.reduce((arr, portaria) => {
      if(portaria.idPortaria){
        arr.push(portaria)
      }
      return arr; 
    }, []);

    try {
      const novaPortaria = await api.post(
        '/portaria',
        payload,
        {
          headers: { Authorization: authToken.token }
        }
      )
      await Promise.all(portariasToBeChanged.map(async alteracao => {
        const {idPortaria: idPortariaAlterada, situacao} = alteracao;
        
          await api.put(
            `/portarias/${idPortariaAlterada}`,
            { 
              situacao: tiposDeAlteracoesPortaria[situacao],
              alteracoes: {...alteracao, idPortaria: novaPortaria.data.id }
            },
            {
              headers: { Authorization: authToken.token }
            }
          )
      }))

      await fetchData();
    } catch(e) {
      alert("Erro! Tente novamente mais tarde")
    }
   
    onClose();
  }

  const checkIfDateIsValid = (dateString, input) => {
    if(!isDateValid(dateString)){
      setErrors(prevState => ({
        ...prevState,
        [input]: true
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        [input]: false
      })) 
    }
  }

  return (
    <Container>
      <Modal>
        <HeaderContainer>
          <ModalTitle>{title}: </ModalTitle>

          <CloseButton onClick={onClose} />
        </HeaderContainer>

          <InputContainer>
            <InputDescription>Assunto *</InputDescription>
            <Input
              placeholder='Assunto...'
              name='assunto'
              value={assunto}
              onChange={e => setAssunto(e.target.value)}
            />

            <InputDescription>Data da publicação *</InputDescription>
            <Input
              onBlur={ e => validade.length && checkIfDateIsValid(e.target.value, 'publicacao')}
              placeholder='Data da publicação...'
              name='publicacao'
              value={publicacao}
              onChange={e => handleChangeDate(e.target.value)}
            />

            {errors.publicacao && <ErrorBanner/>}

            <InputDescription>Classificação *</InputDescription>
              <RadioButtonContainer>
                <SelectComponent
                  value={classificacao}
                  onChange={handleOptionChange}
                >
                  {classificacaoPortaria.map((option) => (
                    <SelectOptionComponent
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectOptionComponent>
                  ))}
              </SelectComponent>
            </RadioButtonContainer>

            <InputDescription>Situação *</InputDescription>
              <RadioButtonContainer>
                <SelectComponent
                  value={situacao}
                  onChange={handleSituacaoChange}
                >
                  {situacaoPortariaInput.map((option) => (
                    <SelectOptionComponent
                      key={option.value}
                      value={option.value}
                    >
                      {option.texto}
                    </SelectOptionComponent>
                  ))}
              </SelectComponent>
            </RadioButtonContainer>

            <InputDescription>Permanente</InputDescription>
            <RadioButtonContainer>
              <RadioButtonText>
                <CheckboxButton
                  checked={permanente}
                  onChange={() => setPermanente(prevState => !prevState)}
                />
                Permanente
              </RadioButtonText>
            </RadioButtonContainer>

            <InputDescription>Link da portaria *</InputDescription>
            <Input
              onBlur={e => isGoogleDriveLink(e.target.value, 'link')}
              placeholder='Link da portaria...'
              name='linkPortaria'
              value={linkPortaria}
              onChange={e => setLinkPortaria(e.target.value)}
            />

            {errors.link && <ErrorBanner/>}

            <InputDescription>Validade</InputDescription>
            <Input
              onBlur={ e => checkIfDateIsValid(e.target.value, 'validade')}
              placeholder='Validade...'
              name='validade'
              value={validade}
              onChange={e => handleChangeValidade(e.target.value)}
            />

            {!!(errors.validade && validade.length) && <ErrorBanner/>}

            <InputDescription>Servidores *</InputDescription>
            <IncrementalInput
              setAnSpecificInput={setAnSpecificServidor}
              name="servidores"
              inputs={servidores}
              decrease={decreaseServidores}
              increase={increaseServidores}
            />

           <InputDescription>Alterações</InputDescription>
           <IncrementalDropdown
              options={alteracoesPortarias}
              setAnSpecificInput={setAnSpecificAlteracao}
              name="alteracoes"
              inputs={alteracoes}
              decrease={decreaseAlteracoes}
              increase={increaseAlteracoes}
            />
          </InputContainer>

          <SecondaryButton 
            disabled={
              !assunto.length ||
              (!publicacao.length || errors.publicacao) ||
              !servidores.length ||
              !classificacao.length ||
              !linkPortaria.length ||
              (errors.link && linkPortaria.length) ||
              (errors.validade && validade.length)
            } 
            onClick={handleSave}
            title={buttonName}
          />
      </Modal>
    </Container>
  )
}
