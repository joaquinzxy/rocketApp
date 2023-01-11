export const generateTableData = ({ routes }) => {
  const legs = routes[0].legs
  const dataResult = [{ distance: 0, duration: 0 }]

  legs.forEach(({ distance, duration }) => {
    dataResult.push({ distance: distance.value, duration: duration.value })
  })

  return dataResult
}

export const getDistance = (distance) => {
  const distanceMeters = parseInt(distance)
  const distanceKilometers = distanceMeters / 1000
  if (distance === 0) {
    return '-'
  } else if (distance < 100) {
    return `${distanceMeters} mts.`
  } else {
    return `${distanceKilometers.toFixed(1)} km.`
  }
}

export const getDuration = (duration) => {
  const durationMinutes = parseInt(duration) / 60
  const durationHours = parseInt(durationMinutes) / 60
  if (duration === 0) {
    return '-'
  } else if (durationMinutes < 60) {
    return `${durationMinutes.toFixed(0)} min.`
  } else {
    return `${durationHours.toFixed(2)} hs.`
  }
}

export const stringToTime = (time) => {
  const [hours, minutes] = time.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}

export const timeToString = (time) => {
  const decimalHours = time / 60
  const hours = parseInt(decimalHours)
  const minutes = ((decimalHours % 1) * 60).toFixed(0)
  return `${hours}:${minutes <= 9 ? '0' + minutes : minutes}`
}

export const getArrivingTime = ({ index, time = '' }, tableData) => {
  const baseTime = stringToTime(time)
  const durationsList = tableData.map(({ duration }) =>
    parseInt((duration / 60).toFixed(0))
  )

  const times = {}
  times[index] = baseTime

  for (let i = index + 1; i < durationsList.length; i++) {
    times[i] = times[i - 1] + durationsList[i]
  }

  for (let i = index; i > 0; i--) {
    times[i - 1] = times[i] - durationsList[i]
  }

  const listFinalTimes = Object.values(times).map((time) => timeToString(time))
  console.log(listFinalTimes)
  return listFinalTimes
}
