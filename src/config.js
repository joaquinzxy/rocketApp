export const google = window.google

export const config = {
  AUTOCOMPLETE: {
    componentRestrictions: { country: 'uy' },
    types: ['geocode'],
    fields: ['place_id', 'geometry', 'id'],
  },
  MAP_ID: 'map-container',
  MAP: {
    center: {
      lat: -34.8689412,
      lng: -56.1697955,
    },
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  },
  ERRORS: {
    LIST: ['NOT_FOUND', 'ZERO_RESULTS'],
    MESSAGES: {
      ZERO_RESULTS:
        'No se encontraron resultados 😱 Asegurate de seleccionar las sugerencias del Autocompletar al definirlas',
      NOT_FOUND:
        'No se encontró al menos una de las direcciones 🤯 Asegurate de seleccionar las sugerencias del Autocompletar al definirlas',
      default: '',
    },
  },
}
