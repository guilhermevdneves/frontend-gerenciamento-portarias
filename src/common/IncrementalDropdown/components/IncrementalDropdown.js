import React, { Fragment, useState } from 'react'
import { Button, AddButton, RemoveButton, Container, Result, InputAndResults, InputsWithButtons } from '../styled/incrementalDropdown'
import { Dropdown } from '../../Dropdown/components/Dropdown';
import { Button as AddNewInput } from '../../Button/components/Button';
import { api } from '../../../services/api';
import { DropdownWitInput } from '../../DropdownWithInput/components/DropdownWithInput';

const generateArrayOfInputs = (editing = false, inputs) => {
  let array = []
  if(!editing) {
    for(const input of inputs) {
      array.push('')
    } 
  } else {
    for(const input of inputs) {
      array.push(input.portaria)
  
    }
  }


  return array;
}

const generateArrayOfNull = (inputs) => {
  let array = []
    for(const input of inputs) {
      array.push(null)
    }
  
  return array;
}


export function IncrementalDropdown(props) {
  const [numbers, setNumbers] = useState(generateArrayOfInputs(props.editing, props.inputs));
  const [results, setResults] = useState(generateArrayOfNull(props.inputs));
  
  const checkNumber = async (value, index) => {
    setNumbers((prevState) => {
      const newArray = [...prevState];

      newArray[index] = value;

      return newArray;
    });


    const response = await api.get(`/portarias?numero=${value}`);

    setResults((prevState) => {
      const newArray = [...prevState];

      newArray[index] = response.data;

      return newArray;
    })
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
                value={numbers[index]}
                handleChange={(e) => checkNumber(e, index)}
                options={results[index]}
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
