import React from 'react'
import './GuitarCard.scss'
import { Link } from 'react-router-dom'

const GuitarCard = () => {
  return (
    <Link className='GuitarCard' to="/">
        <div className="GuitarCard__top">

            <div className="GuitarCard__top__img"></div>

        </div>

        <div className="GuitarCard__bottom">
            <p className="satoshi16">
                The Essential Les Paul
            </p>

            <p className="satoshi14">
                $1,299.00
            </p>
        </div>
    </Link>
  )
}

export default GuitarCard