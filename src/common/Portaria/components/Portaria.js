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
} from '../styled/portaria';

import portariaImg from '../../../assets/images/portariaImg.png';
import { situacaoPortaria } from '../../../constants/situacaoPortaria';
import { formatPortariaLabel } from '../../../utils/formatPortariaLabel';
import { extrairLinkBase } from '../../../utils/extrairLinkBase';

function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 (janeiro é 0)
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function Portaria ({ dadosPortaria, portarias }) {

  const presidente = useMemo(() => dadosPortaria.servidores.find(servidor => servidor.presidente), [dadosPortaria]);
  const anoPublicacao = useMemo(() => new Date(dadosPortaria.publicacao).getFullYear(), [dadosPortaria]);
  const validade =  dadosPortaria.validade ? `VAL: ${formatDateToDDMMYYYY(new Date(dadosPortaria.validade))}` : ''; 
  const link = useMemo(() => dadosPortaria.link && extrairLinkBase(dadosPortaria.link), [dadosPortaria.link]);

  return (
    <Container id={`${dadosPortaria.numero}-${anoPublicacao}`}>
      <ContainerPortaria>
        <BotaoPortaria onClick={() => window.open(link)}>
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
                .map((alteracao, index) => {
                  const portariaEncontrada = portarias.find(port => port.id === alteracao.idPortaria);

                  if(portariaEncontrada) {
                    return (
                      <a  key={`alteracao${alteracao.idPortaria}-${index}`} href={`#${portariaEncontrada.numero}-${new Date(portariaEncontrada.publicacao).getFullYear()}`}>
                        {' ' + formatPortariaLabel(portariaEncontrada)}
                      </a>
                    )
                  }

                  return <Fragment key={`alteracao${alteracao.idPortaria}-${index}`} />;
                })
              }        
          </ConteudoTexto>

          <ConteudoTexto>
            {`DATA: ${formatDateToDDMMYYYY(new Date(dadosPortaria.publicacao))} ${validade}`}
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
