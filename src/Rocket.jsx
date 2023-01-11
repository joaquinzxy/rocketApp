import React, { useState } from 'react'
import { AddDirection } from './components/AddDirection'
import { ListDirections } from './components/ListDirections'
import { NextUIProvider, Container } from '@nextui-org/react'
import { Map } from './components/Map'
import { Header } from './components/Header'
import { PlanningTable } from './components/PlanningTable'

export const Rocket = () => {
  const [directions, setDirections] = useState([])
  const [tableData, setTableData] = useState()

  const onAddDirection = (direction) => {
    setDirections([...directions, direction])
  }

  return (
    <NextUIProvider>
      <Header />
      <Container fluid>
        <AddDirection
          onAddDirection={onAddDirection}
          numberDirections={directions.length}
        />
        <ListDirections directions={directions} setDirections={setDirections} />
        <Map
          waypoints={directions}
          setDirections={setDirections}
          setTableData={setTableData}
        />
        <PlanningTable tableData={tableData} directions={directions} />
      </Container>
    </NextUIProvider>
  )
}
