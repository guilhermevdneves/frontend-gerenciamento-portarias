import React, { Fragment, useState } from 'react'
import { Button, AddButton, RemoveButton, Container, Result, InputAndResults, InputsWithButtons } from '../styled/incrementalDropdown'
import { Dropdown } from '../../Dropdown/components/Dropdown';
import { Button as AddNewInput } from '../../Button/components/Button';
import { api } from '../../../services/api';
import { DropdownWitInput } from '../../DropdownWithInput/components/DropdownWithInput';

export function IncrementalDropdown(props) {
  const [number, setNumber] = useState('');
  const [results, setResults] = useState([]);
  
  const checkNumber = async (value) => {
    setNumber(value);
    const response = await api.get(`/portarias?numero=${value}`);

    setResults(response.data)
  }

  return ( 
    <Container>
      {props.inputs.map((input, index) => (
        <Fragment>
          <InputsWithButtons key={`input${index}`}>
            <Dropdown
              value={input.situacao}
              options={props.options}
              handleChange={(e) => props.setAnSpecificInput({ situacao: e.target.value}, index)} 
            />
            <InputAndResults>
              <DropdownWitInput
                value={number}
                handleChange={checkNumber}
                options={results}
                onSelectItem={(idPortaria) => props.setAnSpecificInput({ idPortaria }, index)}
              />
            </InputAndResults>

            {(props.inputs.length - 1) === index && input.idPortaria &&
              <Button onClick={(e) => {
                e.preventDefault();
                props.increase()
                }}>
                <AddButton size={26} color={'red'} />
              </Button>
            }

          {(props.inputs.length - 1) === index &&
            <Button onClick={(e) => {
                e.preventDefault();
                props.decrease();
              }}
            >
              <RemoveButton size={26} color='blue' />
            </Button>
          }
          </InputsWithButtons>
        </Fragment>
      ))
    }
  
    {!props.inputs.length &&
      <AddNewInput 
        onClick={(e) => {
          e.preventDefault();
          props.increase()
        }}
       title="Adicionar alteração"
      /> 
    }
    </Container>
  )
}
