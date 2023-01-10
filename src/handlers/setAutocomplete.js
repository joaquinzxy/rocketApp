import { config } from '../config'

export const setAutocomplete = (id) => {
  const inputTo = document.getElementById(id)
  // eslint-disable-next-line no-undef
  const autocompleteTo = new google.maps.places.Autocomplete(
    inputTo,
    config.AUTOCOMPLETE
  )
  return autocompleteTo
}
