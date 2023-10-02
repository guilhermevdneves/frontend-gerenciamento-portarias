import React from 'react'
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
            <div key={campo.value}>
              <InputLabel>{campo.label}</InputLabel>
              <Input
                name={campo.value}
                onChange={(e) => handleChangeFilter(campo.value, e.target.value)}
                value={campo.filterText || ''}
              />
            </div>
          ))
        }
      </Container>
    </div>
  )
}
