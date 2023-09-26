import React, { Fragment } from 'react'
import { Container, Input, FiltersTitle } from '../styled/filters'
import { camposFiltros } from '../../../constants/camposFiltros'
import { PrimaryButton } from '../../../routes/Home/styled/home'

export function Filters ({ handleChangeFilter }) {

  const handleCleanFields = () => {

  }

  return (
    <Fragment> 
      <FiltersTitle>Flitros</FiltersTitle>

      <Container>
        <PrimaryButton onClick={handleCleanFields}>Limpar</PrimaryButton>
        {
          camposFiltros.map(campo => (
            <Input 
              key={campo.value}
              onChange={(e) => handleChangeFilter(campo.value, e.target.value )}
              placeholder={campo.label}
            />
          ))
        }
      </Container>
    </Fragment>
  )
}
