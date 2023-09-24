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
  RadioButton,
  RadioButtonText,
  RadioButtonContainer,
  CheckboxButton
} from '../styled/contactsModal'
import { SecondaryButton } from '../../SecondaryButton/components/SecondaryButton'
import { IncrementalInput } from '../../IncrementalInput/components/IncrementalInput';
import { classificacaoPortaria } from '../../../constants/classificacaoPortaria';
import { situacaoPortariaInput } from '../../../constants/situacaoPortaria';
import { api } from '../../../services/api';
import { useAuthContext } from '../../../context/authContext';


export function PortariasModal({
  title,
  onClose,
  buttonName,
  fetchData
}) {
  const [assunto, setAssunto] = useState('');
  const [date, setDate] = useState('');
  const [validade, setValidade] = useState('');
  const [classificacao, setClassificacao] = useState(classificacaoPortaria[0].value);
  const [servidores, setServidores] = useState(['']);
  const [permanente, setPermanente] = useState(false);
  const [situacao, setSituacao] = useState(situacaoPortariaInput[0].value);
  const [linkPortaria, setLinkPortaria] = useState('');
  const [alteracoes, setAlteracoes] = useState(['']);

  const { authToken } = useAuthContext()

  const dateMask = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length > 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9);
    }

    return value;
  }

  const handleChangeDate = (value) => {
    setDate(dateMask(value))
  }

  const handleChangeValidade = (value) => {
    setValidade(dateMask(value))
  }

  const increaseAlteracoes = () => {
    setAlteracoes(prevState => {
      return [...prevState, ''];
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

      newState[index] = value;
    
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

  const handleSave = async () => {
    const payload = {
      assunto,
      publicacao: date,
      linkPortaria,
      classificacao,
      validade,
      permanente,
      situacao,
      servidores,
      alteracoes
    }

    console.log(payload)

    await api.post(
      '/portaria',
      payload,
      {
        headers: { Authorization: authToken.token }
      }
    )

    await fetchData();
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
              placeholder='Data da publicação...'
              name='publicacao'
              value={date}
              onChange={e => handleChangeDate(e.target.value)}
            />

            <InputDescription>Classificação *</InputDescription>
            <RadioButtonContainer>
              {classificacaoPortaria.map((option) => (
                  <RadioButtonText key={option.value}>
                    <RadioButton
                      name= "classificacao"
                      value={option.value}
                      checked={classificacao === option.value}
                      onChange={handleOptionChange}
                    />
                    {option.label}
                  </RadioButtonText>
                ))
              }
            </RadioButtonContainer>

            <InputDescription>Situação</InputDescription>
            <RadioButtonContainer>
              {situacaoPortariaInput.map((option) => (
                  <RadioButtonText key={option.value}>
                    <RadioButton
                      name= "situacao"
                      value={option.value}
                      checked={situacao === option.value}
                      onChange={handleSituacaoChange}
                    />
                    {option.texto}
                  </RadioButtonText>
                ))
              }
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

            <InputDescription>Link da portaria</InputDescription>
            <Input
              placeholder='Link da portaria...'
              name='linkPortaria'
              value={linkPortaria}
              onChange={e => setLinkPortaria(e.target.value)}
            />

            <InputDescription>Validade *</InputDescription>
            <Input
              placeholder='Validade...'
              name='validade'
              value={validade}
              onChange={e => handleChangeValidade(e.target.value)}
            />

            <InputDescription>Servidores *</InputDescription>
           <IncrementalInput setAnSpecificInput={setAnSpecificServidor} name="servidores" inputs={servidores} decrease={decreaseServidores} increase={increaseServidores}/>

           <InputDescription>Alterações *</InputDescription>
           <IncrementalInput setAnSpecificInput={setAnSpecificAlteracao} name="alteracoes" inputs={alteracoes} decrease={decreaseAlteracoes} increase={increaseAlteracoes}/>

          </InputContainer>

          <SecondaryButton onClick={handleSave} title={buttonName} />
      </Modal>
    </Container>
  )
}
