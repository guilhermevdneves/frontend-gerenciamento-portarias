import React from 'react';
import {   SelectOptionComponent, SelectComponent} from '../styled/dropdown';

export function Dropdown({value, handleChange, options}) {
  return (
    <SelectComponent
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <SelectOptionComponent key={option.value} value={option.value}>
          {option.texto}
        </SelectOptionComponent>
      ))}
    </SelectComponent>
  );
}
