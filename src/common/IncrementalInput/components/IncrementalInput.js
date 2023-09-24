import React, { Fragment } from 'react'
import { Button, AddButton, RemoveButton, Container } from '../styled/incrementalInput'
import { Input } from '../../ContactsModal/styled/contactsModal'

export function IncrementalInput(props) {
  console.log(props);
  const inputWithButtons = (input, index) => (
    <div>
      <Input
        name={props.name}
        value={input}
        onChange={e => props.setAnSpecificInput(e.target.value, index)}
      /> 

      {!!input.length &&
        <Button onClick={() => props.increase()}>
           <AddButton size={26} color={'red'} />
         </Button>
      }
 
      {props.inputs.length > 1 &&
        <Button onClick={() => props.decrease()}>
          <RemoveButton size={26} color='blue' />
        </Button>
      }
    </div>
  )


  return ( 
    <Container>
      {props.inputs.map((input, index) => (
        <Fragment>
          {(props.inputs.length - 1) !== index ?
              <Input
                value={input}
                name={props.name}
                onChange={e => props.setAnSpecificInput(e.target.value, index)}
              /> 
            :
            inputWithButtons(input, index)
          }
        </Fragment>
      ))
    }
    </Container>
  )
}
