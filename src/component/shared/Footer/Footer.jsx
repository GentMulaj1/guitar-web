import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='Footer'>

        <div className="Footer__Top">
            <div className="Footer__Top__1">
                <div className="Footer__Top__Logo"></div>
                <div className="Footer__Top__1__texts">
                    <p className='satoshi16regular'><span className="email"/>Enquiry@VibeStrings.com</p>
                    <p className='satoshi16regular'><span className="location"/>San Francisco</p>
                </div>
            </div>

            <div className="Footer__Top__2">
                <div className="Footer__Top__2__card">
                    <p className="satoshi18">
                        Pages
                    </p>
                    <div className="Footer__Top__2__card__links">
                        <Link to='/' className='satoshi16regular'>Store</Link>
                        <Link to='/' className='satoshi16regular'>Collections</Link>
                        <Link to='/' className='satoshi16regular'>Support</Link>
                    </div>
                </div>

                <div className="Footer__Top__2__card">
                    <p className="satoshi18">
                        Product
                    </p>
                    <div className="Footer__Top__2__card__links">
                        <Link to='/' className='satoshi16regular'>Terms</Link>
                        <Link to='/' className='satoshi16regular'>Privacy Policy</Link>
                        <Link to='/' className='satoshi16regular'>Copyright</Link>
                    </div>
                </div>
            </div>


            <div className="Footer__Top__3">
                <p className="satoshi18">
                    Follow us
                </p>
                <div className='Footer__Top__3__socials'>
                    <span className="Footer__facebook"/>
                    <span className="Footer__twitter"/>
                    <span className="Footer__instagram"/>
                </div>
            </div>


        </div>
        

        <p className="Footer__CopyRight satoshi16regular">
            © 2022 Copyright.VibeStrings
        </p>

    </div>
  )
}

export default Footer