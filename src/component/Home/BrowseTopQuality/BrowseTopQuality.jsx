import React from 'react'
import './BrowseTopQuality.scss'
import Logo from '../../shared/Logo/Logo'

const BrowseTopQuality = () => {
  return (
    <div className='BrowseTopQuality'>
        
        <div className="BrowseTopQuality__left">
            <Logo/>
            <div className="BrowseTopQuality__left__texts">
                <p className="satoshi56">
                Browse top quality <span className='orangeFont'>Guitars</span> online
                </p>

                <p className="satoshi16">
                    Explore 50k+ latest collections of branded guitars online with VibeStrings.
                </p>
            </div>
         
        </div>

        <div className="BrowseTopQuality__right">
            <span className='BrowseTopQuality__right__img'/>
            <span className='BrowseTopQuality__right__circle'/>
        </div>

    </div>
  )
}

export default BrowseTopQuality