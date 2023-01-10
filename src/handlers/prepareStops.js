export const prepareStops = (waypoints) => {
  const firstStop = waypoints[0]
  const lastStop = waypoints[waypoints.length - 1]
  const middleStops = waypoints
    .slice(1, waypoints.length - 1)
    .map((direction) => ({
      location: direction,
      stopover: true,
    }))

  return {
    firstStop,
    lastStop,
    middleStops,
  }
}
