import React from 'react'
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
            {`Data: ${dadosPortaria.publicacao} Val: ${dadosPortaria.validade}`}
         </ConteudoTexto>

          <ConteudoTexto>{dadosPortaria.numero}</ConteudoTexto>
      </ContainerInfo>
           
      <LabelSituaçao cor={situacaoPortaria[dadosPortaria.situacao].color} />
    </Container>
  )
}
