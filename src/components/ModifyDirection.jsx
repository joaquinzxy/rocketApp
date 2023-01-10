import React, { useState } from 'react'
import { InputDirection } from './InputDirection'
import { Badge, Button, Grid } from '@nextui-org/react'
import { FiEdit, FiDelete } from 'react-icons/fi'

export const ModifyDirection = ({ index, value, onChange, onDelete }) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const onClickModify = () => {
    setIsDisabled(!isDisabled)
  }

  const onClickDelete = () => {
    onDelete(index)
  }

  return (
    <div>
      <Grid.Container gap={1} justify='center'>
        <Grid xs={12} sm={10} md={8}>
          <Badge
            color={'error'}
            style={{ padding: 10, width: 40, marginRight: 10 }}
          >
            {String.fromCharCode(index + 1 + 64)}
          </Badge>
          <InputDirection
            value={value}
            index={index}
            onChange={onChange}
            isDisabled={isDisabled}
          />
          <Button
            auto
            flat
            color={'primary'}
            size='md'
            onClick={onClickModify}
            icon={<FiEdit></FiEdit>}
            style={{ marginLeft: 10, marginRight: 10 }}
          ></Button>
          <Button
            auto
            flat
            color={'error'}
            size='md'
            onClick={onClickDelete}
            icon={<FiDelete></FiDelete>}
          ></Button>
        </Grid>
      </Grid.Container>
    </div>
  )
}
