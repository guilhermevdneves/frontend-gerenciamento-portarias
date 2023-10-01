import React, { Fragment } from 'react'
import { Container, Input, FiltersTitle, InputLabel } from '../styled/filters'
import { PrimaryButton } from '../../../routes/Home/styled/home'

export function Filters ({ handleChangeFilter, fields, cleanFilters }) {
  return (
    <div> 
      <Container>
        <FiltersTitle>Flitros</FiltersTitle>

        <PrimaryButton onClick={(e) => cleanFilters(e)}>Limpar Filtros</PrimaryButton>
        {
          fields.map(campo => (
            <Fragment>
              <InputLabel>{campo.label}</InputLabel>
              <Input 
                key={campo.value}
                name={campo.value}
                onChange={(e) => handleChangeFilter(campo.value, e.target.value)}
                value={campo.filterText || ''}
              />
            </Fragment>
          ))
        }
      </Container>
    </div>
  )
}
