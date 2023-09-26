import React, { useState } from 'react';
import {
  DropdownContainer,
  Input,
  DropdownList,
  DropdownItem,
} from '../styled/dropdownWithInput';

export function DropdownWitInput({ value, handleChange, onSelectItem, options }) {
  const [itemSelected, setItemSelected] = useState();

  return (
    <DropdownContainer>
      <Input
        type="text"
        placeholder="Selecione uma opção"
        value={itemSelected || value}
        disabled={itemSelected}
        onChange={(e) => handleChange(e.target.value)}
         // Impede a edição direta do input
      />
      {options && !itemSelected && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
            
              key={option.value}
              onClick={(e) => {
                e.preventDefault();
                onSelectItem(option.id);
                setItemSelected(`${option.numero}/${new Date(option.publicacao).getFullYear()}`);
              }}
            >
              {`${option.numero}/${new Date(option.publicacao).getFullYear()}`}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}