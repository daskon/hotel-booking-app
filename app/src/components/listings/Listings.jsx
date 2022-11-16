import { faBed, faHotTubPerson, faMugHot, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './listings.css'

const Listings = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/hotel/2');
    }
  return (
    <div className='lists-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK44jnSWpsAGiIlp9DuXPyNluhiRoB5YEREMfv7ZqHAtR6aDyaDICSqqc60sfu6iwlWqU&usqp=CAU" alt="" className="lists-image" />
        <div className="lists-info">
            <div className="lists-heading">
                <h3 className="lists-title">Beach side hotel</h3>
                <span className="lists-rating">5.6</span>
            </div>
            <span className="lists-promotion">
                15% off for X-mass
            </span>
            <span className="lists-distance">
                12km from Kandy
            </span>
            <div className='lists-moreinfo'>
              <span className="lists-price">Rs 2,000</span>
            </div>
            <button className="lists-available" onClick={handleButton}>See Availability</button>
        </div>
        <div className="lists-features">
            <span className="lists-feature">
                <FontAwesomeIcon icon={faBed} className='icon' />
            </span>
            <span className="lists-feature">
                <FontAwesomeIcon icon={faWifi} className='icon' />
            </span>
            <span className="lists-feature">
                <FontAwesomeIcon icon={faHotTubPerson} className='icon' />
            </span>
            <span className="lists-feature">
                <FontAwesomeIcon icon={faMugHot} className='icon' />
            </span>
        </div>
    </div>
  )
}

export default Listings