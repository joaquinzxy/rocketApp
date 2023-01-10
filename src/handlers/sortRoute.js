export const sortRoute = ({ firstStop, lastStop, middleStops }, { routes }) => {
  const { waypoint_order } = routes[0]
  const newMiddleStops = waypoint_order.map(
    (index) => middleStops[index].location
  )
  return [firstStop, ...newMiddleStops, lastStop]
}
