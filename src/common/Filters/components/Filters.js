import React from 'react'
import { Container, Input, FiltersTitle } from '../styled/filters'
import { PrimaryButton } from '../../../routes/Home/styled/home'

export function Filters ({ handleChangeFilter, fields, cleanFilters }) {
  console.log(fields)
  return (
    <div> 
      <Container>
        <FiltersTitle>Flitros</FiltersTitle>

        <PrimaryButton onClick={(e) => cleanFilters(e)}>Limpar Filtros</PrimaryButton>
        {
          fields.map(campo => (
            <Input 
              key={campo.value}
              name={campo.value}
              onChange={(e) => handleChangeFilter(campo.value, e.target.value)}
              placeholder={campo.label}
              value={campo.filterText || ''}
            />
          ))
        }
      </Container>
    </div>
  )
}
