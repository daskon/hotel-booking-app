import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHotel, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-container'>
            <span className='logo'>
               <Link to="/" className='logo-link'>Netbooking</Link>
            </span>
            <div className='nav-links'>
                <Link to="/hotels"><FontAwesomeIcon icon={faHotel} className='nav-icon active' /></Link>
                <Link to="/hotels"><FontAwesomeIcon icon={faPhone} className='nav-icon' /></Link>
            </div>
            <div className='nav-items'>
                <FontAwesomeIcon icon={faUser} className='user-icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar