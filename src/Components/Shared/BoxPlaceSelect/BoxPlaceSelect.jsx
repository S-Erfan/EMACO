import React from 'react'
import { useSelector } from 'react-redux'
import { BoxPlaceSelected } from './BoxStyles'

const BoxPlaceSelect = ({name, icon , onCilcked, id }) => {

  const target = useSelector(state => state.places.target);

  const handler = () => {
    onCilcked(id)
  }

  return (
    <BoxPlaceSelected onClick={handler}  active={target === "" ? false : target.id === id ? true : false} >
        {icon}
        <span>{name}</span>
    </BoxPlaceSelected>
  )
}

export default BoxPlaceSelect