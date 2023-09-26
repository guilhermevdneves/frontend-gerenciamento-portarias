import React, { Fragment, useMemo } from 'react'
import {
  Container,
  Title,
  LabelSituaçao,
  ImagemPortaria,
  BotaoPortaria,
  ContainerPortaria,
  ContainerInfo,
  ContainerTitulo,
  ConteudoTexto
} from '../styled/card';

import portariaImg from '../../../assets/images/portariaImg.png';
import { situacaoPortaria } from '../../../constants/situacaoPortaria';
import { formatPortariaLabel } from '../../../utils/formatPortariaLabel';

export function Portaria ({ dadosPortaria, portarias }) {
  const presidente = useMemo(() => dadosPortaria.servidores.find(servidor => servidor.presidente), [dadosPortaria]);
  const anoPublicacao = useMemo(() => new Date(dadosPortaria.publicacao).getFullYear(), [dadosPortaria]);

  function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 (janeiro é 0)
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
 
  return (
    <Container id={`${dadosPortaria.numero}-${anoPublicacao}`}>
      <ContainerPortaria>
        <BotaoPortaria href={dadosPortaria.linkPortaria}>
          <ImagemPortaria src={portariaImg} />
        </BotaoPortaria>
      </ContainerPortaria>
  
      <ContainerInfo>
        <ContainerTitulo>
          <Title>{`${dadosPortaria.numero}/${anoPublicacao} - ${dadosPortaria.assunto}`}</Title>
        </ContainerTitulo>

          <ConteudoTexto 
            cor={situacaoPortaria[dadosPortaria.situacao].color}
          >
            {`
              ${situacaoPortaria[dadosPortaria.situacao].texto}
                      
            `}
            {
                dadosPortaria
                  .alteracoes
                  .map(alteracao => {
                    const portariaEncontrada = portarias.find(port => port.id === alteracao.idPortaria);

                    if(portariaEncontrada) {
                      return (
                        <a key={portariaEncontrada.id} href={`#${portariaEncontrada.numero}-${new Date(portariaEncontrada.publicacao).getFullYear()}`}>
                          {' ' + formatPortariaLabel(portariaEncontrada)}
                        </a>
                        )
                    }

                    return <Fragment  />;
                  })
              }        
          </ConteudoTexto>

          <ConteudoTexto>
            {`DATA: ${formatDateToDDMMYYYY(new Date(dadosPortaria.publicacao))} VAL: ${formatDateToDDMMYYYY(new Date(dadosPortaria.validade))}`}
         </ConteudoTexto>

          <ConteudoTexto>
            {`SERVIDORES:${dadosPortaria.servidores.map(servidor => ` ${servidor.nome}`)}`}
          </ConteudoTexto>
          {!!presidente &&
            <ConteudoTexto>
              {`PRESIDENTE: ${presidente.nome}`}
            </ConteudoTexto>
          }

      </ContainerInfo>
           
      <LabelSituaçao cor={situacaoPortaria[dadosPortaria.situacao].color} />
    </Container>
  )
}
