import React, { Fragment, useMemo, useState } from 'react'
import { IconContext } from "react-icons";
import {
  Container,
  Title,
  LabelSituaçao,
  ImagemPortaria,
  BotaoPortaria,
  ContainerPortaria,
  ContainerInfo,
  ContainerTitulo,
  ConteudoTexto,
  Icons,
  IconButton
} from '../styled/portaria';
import { PortariasModal } from '../../PortariasModal/components/PortariasModal';
import portariaImg from '../../../assets/images/portariaImg.png';
import { situacaoPortaria } from '../../../constants/situacaoPortaria';
import { formatPortariaLabel } from '../../../utils/formatPortariaLabel';
import { extrairLinkBase } from '../../../utils/extrairLinkBase';
import Modal from '../../Modal/components/Modal';
import { IoIosTrash } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { api } from '../../../services/api';
import { useAuthContext } from '../../../context/authContext';
import { isUserLoggedIn } from '../../../utils/isUserLoggedIn';

function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 (janeiro é 0)
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function Portaria({ dadosPortaria, portarias, fetchData }) {
  const [editarPortaria, setEditarPortaria ] = useState(false);
  const [excluirPortaria, setExcluirPortaria ] = useState(false);
  const { authToken } = useAuthContext()
  const isUserLogged = isUserLoggedIn({authToken});
  const presidente = useMemo(() => dadosPortaria.servidores.find(servidor => servidor.presidente), [dadosPortaria]);
  const anoPublicacao = useMemo(() => new Date(dadosPortaria.publicacao).getFullYear(), [dadosPortaria]);
  const validade = dadosPortaria.validade ? `VAL: ${formatDateToDDMMYYYY(new Date(dadosPortaria.validade))}` : '';
  const link = useMemo(() => dadosPortaria.link && extrairLinkBase(dadosPortaria.link), [dadosPortaria.link]);

  const handleDelete = async () => {
    try {
      await api.delete(`/portarias/${dadosPortaria.id}`, 
      {
        headers: { Authorization: authToken.token }
      });

    } catch (e) {
      alert('Erro ao deletar portaria');
    }

    await fetchData();
    setExcluirPortaria(false)
  }

  return (
    <Container id={`${dadosPortaria.numero}-${anoPublicacao}`}>
      <ContainerPortaria>
        <BotaoPortaria onClick={() => window.open(link)}>
          <ImagemPortaria src={portariaImg} />
        </BotaoPortaria>
      </ContainerPortaria>

      <ContainerInfo>
        <ContainerTitulo>
          <Title>
            {`${dadosPortaria.numero}/${anoPublicacao} - ${dadosPortaria.assunto}`}
          </Title>
        </ContainerTitulo>

        <ConteudoTexto
          cor={situacaoPortaria[dadosPortaria.situacao].color}
        >
          {`${situacaoPortaria[dadosPortaria.situacao].texto}`}
          {
            dadosPortaria
              .alteracoes
              .map((alteracao, index) => {
                const portariaEncontrada = portarias.find(port => port.id === alteracao.idPortaria);

                if (portariaEncontrada) {
                  return (
                    <a key={`alteracao${alteracao.idPortaria}-${index}`} href={`#${portariaEncontrada.numero}-${new Date(portariaEncontrada.publicacao).getFullYear()}`}>
                      {' ' + formatPortariaLabel(portariaEncontrada)}
                    </a>
                  )
                }

                return <Fragment key={`alteracao${alteracao.idPortaria}-${index}`} />;
              })
          }
        </ConteudoTexto>

        <ConteudoTexto>
          {`DATA: ${formatDateToDDMMYYYY(new Date(dadosPortaria.publicacao))} ${validade.getTime ? validade : ''}`}
        </ConteudoTexto>
        {!!dadosPortaria.servidores.length &&
          <ConteudoTexto>
            {`SERVIDORES:${dadosPortaria.servidores.map(servidor => ` ${servidor.nome}`)}`}
          </ConteudoTexto>
         }

        {!!presidente &&
          <ConteudoTexto>
            {`PRESIDENTE: ${presidente.nome}`}
          </ConteudoTexto>
        }

      </ContainerInfo>

      <LabelSituaçao cor={situacaoPortaria[dadosPortaria.situacao].color}>
        {isUserLogged && 
          <Icons>
            <IconButton
              onClick={() => setExcluirPortaria(true)}
            >
              <IoIosTrash />
            </IconButton>
            <IconButton
              onClick={() => setEditarPortaria(true)}
            >
              <AiOutlineEdit />
            </IconButton>
          </Icons>
        }
       
      </LabelSituaçao>

      { excluirPortaria &&
        <Modal
          handleCancel={() => setExcluirPortaria(false)}
          handleDelete={() => handleDelete()}
        />
      }

      { editarPortaria &&
        <PortariasModal
          portarias={portarias}
          title="Editar portaria"
          onClose={() => setEditarPortaria(false)}
          fetchData={fetchData}
          portariaInicial={dadosPortaria}
          buttonName="Editar"
        />
      }
    </Container>
  )
}
