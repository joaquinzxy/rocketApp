import {
  Button,
  Container,
  Input,
  Row,
  Switch,
  Table,
  Text,
} from '@nextui-org/react'
import React, { useState } from 'react'
import { getDistance, getDuration } from '../handlers/generateTableData'

export const PlanningTable = ({ tableData, directions }) => {
  const today = new Date()

  const [arrivePriority, setArrivePriority] = useState({
    index: 0,
    time: `${today.getHours()}:${today.getMinutes}`,
  })

  const onClickPriority = (index) => {
    setArrivePriority({ ...arrivePriority, index: index })
  }

  const onClickTime = (event, index) => {
    setArrivePriority({ ...arrivePriority, time: event.target.value })
  }

  const onClickCalculate = () => {}

  return (
    <>
      {tableData && (
        <Table
          sticked
          aria-label='Example static striped collection table'
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
        >
          <Table.Header>
            <Table.Column>#</Table.Column>
            <Table.Column>Dirección</Table.Column>
            <Table.Column>Distancia</Table.Column>
            <Table.Column>Duración</Table.Column>
            {/* <Table.Column>Horario estimado</Table.Column>
            <Table.Column>Prioridad</Table.Column> */}
          </Table.Header>
          <Table.Body>
            {tableData.map(({ distance, duration }, index) => (
              <Table.Row key={index + 1}>
                <Table.Cell>{`${String.fromCharCode(
                  index + 1 + 64
                )}`}</Table.Cell>
                <Table.Cell>
                  <Text>{`${directions[index]}`}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text align={'center'}>{getDistance(distance)}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text align={'center'}>{getDuration(duration)}</Text>
                </Table.Cell>
                {/* <Table.Cell>
                  <Input
                    type='time'
                    aria-label={`duration ${index}`}
                    disabled={arrivePriority.index !== index}
                    onChange={(e) => onClickTime(e, index)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Switch
                    checked={arrivePriority.index === index}
                    onClick={() => onClickPriority(index)}
                  />
                </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {tableData && (
        <Container>
          <Row justify='center' style={{ padding: 15 }}>
            <Button onClick={onClickCalculate}>Calcular tiempos</Button>
          </Row>
        </Container>
      )}
    </>
  )
}
