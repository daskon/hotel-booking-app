import { faBed, faHotTubPerson, faMugHot, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './listings.css'

const Listings = ({item}) => {
  return (
    <div className='lists-container'>
        <img src={item.photos[0] ? item.photos[0] : `https://via.placeholder.com/150`} alt="" className="lists-image" />
        <div className="lists-info">
            <div className="lists-heading">
                <h3 className="lists-title">{item.name}</h3>
                {item.rating && <span className="lists-rating">{item.rating}</span>}
            </div>
            <span className="lists-promotion">
                15% off for X-mass
            </span>
            <span className="lists-distance">
                {item.address}
            </span>
            <div className='lists-moreinfo'>
              <span className="lists-price">Rs {item.cheapest_price}</span>
            </div>
            <Link to={`/hotel/${item._id}`}>
            <button className="lists-available">See Availability</button>
            </Link>
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