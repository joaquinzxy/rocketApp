import React, { useEffect } from 'react'
import { setAutocomplete } from '../handlers/setAutocomplete'

export const InputDirection = ({
  value,
  index = null,
  onChange,
  isDisabled = false,
}) => {
  const onChangeInput = (event) => {
    onChange(event.target.value, index)
  }

  useEffect(() => {
    setAutocomplete(`direction-${index}`)
  }, [])

  return (
    <input
      type='text'
      placeholder='Agregar dirección'
      value={value}
      onChange={onChangeInput}
      width='100%'
      disabled={isDisabled}
      aria-label={value}
      id={`direction-${index}`}
      onBlur={onChangeInput}
    />
  )
}
