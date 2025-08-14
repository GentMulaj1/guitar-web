import React from 'react'
import Logo from '../../shared/Logo/Logo'
import { Link } from 'react-router-dom'
import './RockStar.scss'

const RockStar = () => {
  return (
    <div className='RockStar'>
             
        <div className="Guitars__left">
            <Logo/>
            <div className="Guitars__left__texts">
                <p className="satoshi56">
                Play like a <span className="orangeFont">Rock star</span>
                </p>

                <p className="satoshi16">
                    With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage. Ask ChatGPT
                </p>
            </div>

            <Link to='/' className='cc16'>
                <span className="arrowleft"></span>
                Back to home
            </Link>
         
        </div>


        <div className="Guitars__right">
            <div className='Guitars__right__img'>
                <div className="Guitars__right__img__content"/>
            </div>
            <span className='Guitars__right__circle'/>
        </div>


    </div>
  )
}

export default RockStar