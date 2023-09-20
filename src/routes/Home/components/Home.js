import React, { useCallback, useState } from 'react'
import {
  Container,
  Title,
  TitleContainer,
  CardContainer
} from '../styled/home'
import { Card } from '../../../common/Card/components/Card'
import { useAuthContext } from '../../../context/authContext'

export function Home () {
  const portarias = [{
    numero:'CPV.0001',
    publicacao:'05/01/2023',
    assunto: 'Trata da designação dos fiscais do Contrato 13.712/2022 referente a Extremo Consultoria Ltda (serviços de solução de nuvem)',
    linkPortaria: 'https://drive.google.com/file/d/18KyN5Tg0P3Jkq74ixQuyCA9-SFVM20-x/view',
    classificacao: 'F',
    permanente: true,
    situacao: 'VIGENTE',
    validade: 'Até o vencimento do contrato e de sua garantia, quando houver',
    servidores: ['Larissa Carvalho Alves', 'Junio Rodrigues de oliveira'],
    alteracoes: [
      {
        situação: 'REVOGA',
        numeroPortaria: 'CPV.0002'
      },
      {
        situação: 'ALTERA',
        numeroPortaria: 'CPV.0002'
      }
    ],
  },
  {
    numero:'CPV.0001',
    publicacao:'05/01/2023',
    assunto: 'Trata da designação dos fiscais do Contrato 13.712/2022 referente a Extremo Consultoria Ltda (serviços de solução de nuvem)',
    linkPortaria: 'https://drive.google.com/file/d/18KyN5Tg0P3Jkq74ixQuyCA9-SFVM20-x/view',
    classificacao: 'F',
    permanente: true,
    situacao: 'ALTERADA',
    validade: 'Até o vencimento do contrato e de sua garantia, quando houver',
    servidores: ['Larissa Carvalho Alves', 'Junio Rodrigues de oliveira'],
    alteracoes: [
      {
        situação: 'REVOGA',
        numeroPortaria: 'CPV.0002'
      },
      {
        situação: 'ALTERA',
        numeroPortaria: 'CPV.0002'
      }
    ],
  },
  {
    numero:'CPV.0001',
    publicacao:'05/01/2023',
    assunto: 'Trata da designação dos fiscais do Contrato 13.712/2022 referente a Extremo Consultoria Ltda (serviços de solução de nuvem)',
    linkPortaria: 'https://drive.google.com/file/d/18KyN5Tg0P3Jkq74ixQuyCA9-SFVM20-x/view',
    classificacao: 'F',
    permanente: true,
    situacao: 'REVOGADA',
    validade: 'Até o vencimento do contrato e de sua garantia, quando houver',
    servidores: ['Larissa Carvalho Alves', 'Junio Rodrigues de oliveira'],
    alteracoes: [
      {
        situação: 'REVOGA',
        numeroPortaria: 'CPV.0002'
      },
      {
        situação: 'ALTERA',
        numeroPortaria: 'CPV.0002'
      }
    ],
  },
  {
    numero:'CPV.0001',
    publicacao:'05/01/2023',
    assunto: 'Trata da designação dos fiscais do Contrato 13.712/2022 referente a Extremo Consultoria Ltda (serviços de solução de nuvem)',
    linkPortaria: 'https://drive.google.com/file/d/18KyN5Tg0P3Jkq74ixQuyCA9-SFVM20-x/view',
    classificacao: 'F',
    permanente: true,
    situacao: 'EXTINTA',
    validade: 'Até o vencimento do contrato e de sua garantia, quando houver',
    servidores: ['Larissa Carvalho Alves', 'Junio Rodrigues de oliveira'],
    alteracoes: [
      {
        situação: 'REVOGA',
        numeroPortaria: 'CPV.0002'
      },
      {
        situação: 'ALTERA',
        numeroPortaria: 'CPV.0002'
      }
    ],
  }


]
  return (
    <Container>
      <TitleContainer>
        <Title>Portal para gerenciamento de portarias</Title>
      </TitleContainer>
    
      <CardContainer>
        {portarias.map(portaria => 
          <Card
            dadosPortaria={portaria}
            title='Anexo'
            disabled
            content={<p>Conteúdo indisponível</p>}
          />
        )}
      </CardContainer>
    </Container>
  )
}
