import React, { useState } from 'react'
import { InputDirection } from './InputDirection'
import { Button, Grid } from '@nextui-org/react'

export const AddDirection = ({ onAddDirection, numberDirections }) => {
  const [newDirection, setNewDirection] = useState('')

  const [isDisabled, setIsDisabled] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const onChange = (value, index) => {
    setNewDirection(value)
  }

  const onSubmit = () => {
    setIsDisabled(true)
    onAddDirection(newDirection)
    setNewDirection('')
  }

  return (
    <>
      <Grid.Container gap={1} justify='center' style={{ py: '10vh' }}>
        <Grid xs={8}>
          <InputDirection
            onChange={onChange}
            value={newDirection}
            onAddDirection
          />
        </Grid>
        <Grid>
          <Button
            onClick={onSubmit}
            disabled={
              !(
                newDirection.length >= 10 &&
                numberDirections < 10 &&
                isDisabled
              )
            }
          >
            Agregar
          </Button>
        </Grid>
      </Grid.Container>
    </>
  )
}
