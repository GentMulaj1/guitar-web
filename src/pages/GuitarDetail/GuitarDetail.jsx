import React from 'react'
import './GuitarDetail.scss'
import GuitarDetailHeader from '../../component/GuitarDetail/GuitarDetailHeader/GuitarDetailHeader'
import SpecAndWhoPlay from '../../component/GuitarDetail/SpecAndWhoPlay/SpecAndWhoPlay'

const GuitarDetail = () => {
  return (
    <div className='GuitarDetail'>
        <GuitarDetailHeader/>
        <SpecAndWhoPlay />

    </div>
  )
}

export default GuitarDetail