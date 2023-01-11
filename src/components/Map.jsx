import React, { useEffect, useState } from 'react'
import { config, google } from '../config'
import { Button, Card, Container, Row, Text } from '@nextui-org/react'
import { calcRoute } from '../handlers/calcRoute'

export const Map = ({ waypoints = [], setDirections, setTableData }) => {
  const [status, setStatus] = useState('OK')
  const [isDisabled, setIsDisabled] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const [directionsServices, setDirectionsServices] = useState(
    new google.maps.DirectionsService()
  )
  // eslint-disable-next-line no-unused-vars
  const [directionsDisplay, setDirectionsDisplay] = useState(
    new google.maps.DirectionsRenderer()
  )
  const [htmlMap, setHtmlMap] = useState()

  useEffect(() => {
    const mapContainer = document.getElementById(config.MAP_ID)
    setHtmlMap(new google.maps.Map(mapContainer, config.MAP))
  }, [])

  useEffect(() => {
    if (waypoints.length < 2) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [waypoints])

  const onClickReset = () => {
    directionsDisplay.setDirections({ routes: [] })
  }

  const onClickCalc = () => {
    if (waypoints.length >= 2) {
      onClickReset()
      calcRoute({
        directionsDisplay,
        directionsServices,
        waypoints,
        htmlMap,
        setDirections,
        setStatus,
        setTableData,
      })
    }
  }

  return (
    <>
      {status != 'OK' && (
        <Card style={{ marginBottom: 50, marginTop: 30 }}>
          <Card.Body>
            <Text css={{ textAlign: 'center' }}>
              {config.ERRORS.LIST.includes(status)
                ? config.ERRORS.MESSAGES[status]
                : `Ocurrio un error: ${status}`}
            </Text>
          </Card.Body>
        </Card>
      )}
      <Container id='map-container'></Container>
      <Container>
        <Row justify='center' style={{ padding: 15 }}>
          <Button onClick={onClickCalc} disabled={isDisabled}>
            Optimizar ruta
          </Button>
        </Row>
      </Container>
    </>
  )
}
