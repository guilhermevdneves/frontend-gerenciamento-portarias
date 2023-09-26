import React, { Fragment } from 'react'
import { Button, AddButton, RemoveButton, Container } from '../styled/incrementalInput'
import { Input } from '../../PortariasModal/styled/portariasModal'

export function IncrementalInput(props) {
  const inputWithButtons = (input, index) => (
    <div>
      <Input
        name={props.name}
        value={input}
        onChange={e => props.setAnSpecificInput(e.target.value, index)}
      /> 

      {!!input.length &&
        <Button onClick={(e) => {
          e.preventDefault()
          props.increase(e)
        }}>
           <AddButton size={26} color={'red'} />
         </Button>
      }
 
      {props.inputs.length > 1 &&
        <Button onClick={(e) => (e) => {
          e.preventDefault()
          props.decrease(e)
        }}>
          <RemoveButton size={26} color='blue' />
        </Button>
      }
    </div>
  )


  return ( 
    <Container >
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
