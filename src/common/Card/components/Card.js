import React, { useMemo } from 'react'
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

export function Card ({ dadosPortaria }) {
  const presidente = useMemo(() => dadosPortaria.servidores.find(servidor => servidor.presidente), [dadosPortaria]);
console.log(presidente, 'presidente')
  return (
    <Container>
      <ContainerPortaria>
        <BotaoPortaria href={dadosPortaria.linkPortaria}>
          <ImagemPortaria src={portariaImg} />
        </BotaoPortaria>
      </ContainerPortaria>
  
      <ContainerInfo>
        <ContainerTitulo>
          <Title>{`${dadosPortaria.numero} - ${dadosPortaria.assunto}`}</Title>
        </ContainerTitulo>

         <ConteudoTexto cor={situacaoPortaria[dadosPortaria.situacao].color}>{dadosPortaria.situacao}</ConteudoTexto>


          <ConteudoTexto>
            {`DATA: ${dadosPortaria.publicacao} VAL: ${dadosPortaria.validade}`}
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
