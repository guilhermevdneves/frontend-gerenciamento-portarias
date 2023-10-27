import React from 'react'
import { Container, Input, FiltersTitle, InputLabel } from '../styled/filters'
import { PrimaryButton } from '../../../routes/Home/styled/home'

export function Filters ({ handleChangeFilter, fields, cleanFilters, flexible = false, white = false }) {
  return (
    <div> 
      <Container>
        <FiltersTitle white={white}>Flitros</FiltersTitle>

        <PrimaryButton onClick={(e) => cleanFilters(e)}>Limpar Filtros</PrimaryButton>
        {
          fields.map(campo => (
            <div key={campo.value}>
              <InputLabel  white={white}>{campo.label}</InputLabel>
              <Input
                flexible={flexible}
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
