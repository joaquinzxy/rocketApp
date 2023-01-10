import React from 'react'
import { ModifyDirection } from './ModifyDirection'
import { Container } from '@nextui-org/react'

export const ListDirections = ({ directions, setDirections }) => {
  const onChange = (value, index) => {
    setDirections(
      directions.map((direction, indexMap) => {
        if (indexMap === index) {
          return value
        } else {
          return direction
        }
      })
    )
  }

  const onDelete = (index) => {
    setDirections(
      directions.filter((direction, indexFilter) => {
        return index != indexFilter
      })
    )
  }

  return (
    <Container className='directionsContainer' fluid style={{ marginTop: 30 }}>
      {directions.length > 0 && <h4>Lista de direcciones</h4>}
      {directions.map((direction, index) => (
        <ModifyDirection
          key={index}
          value={direction}
          index={index}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </Container>
  )
}
