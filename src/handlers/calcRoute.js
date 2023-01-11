import { google } from '../config'
import { generateTableData } from './generateTableData'
import { prepareStops } from './prepareStops'
import { sortRoute } from './sortRoute'

export const calcRoute = async ({
  waypoints,
  directionsServices,
  directionsDisplay,
  htmlMap,
  setDirections,
  setStatus,
  setTableData,
}) => {
  const { firstStop, lastStop, middleStops } = prepareStops(waypoints)
  const request = {
    origin: firstStop,
    destination: lastStop,
    travelMode: google.maps.TravelMode.DRIVING,
    waypoints: middleStops,
    optimizeWaypoints: true,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
  }

  const getResults = async () => {
    try {
      const results = await directionsServices.route(request)
      setStatus('OK')
      return results
    } catch (error) {
      setStatus(error.code)
    }
  }

  const result = await getResults()

  if (result) {
    directionsDisplay.setDirections({ routes: [] })
    directionsDisplay.setMap(htmlMap)
    directionsDisplay.setDirections(result)
    setDirections(sortRoute(prepareStops(waypoints), result))
    setTableData(generateTableData(result))
  }
}
