import { Badge, Container, Grid, Text } from '@nextui-org/react'
import React from 'react'

export const Header = () => {
  return (
    <>
      <Container justify='center' css={{ pt: '3rem' }} gap={3}>
        <Grid.Container gap={0} justify='center'>
          <Grid>
            <Text h1>Rocket</Text>
          </Grid>
          <Grid>
            <Badge
              size={'lg'}
              color={'primary'}
              placement={'bottom-left'}
              variant='flat'
            >
              Calcula tu ruta
            </Badge>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
