import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHotel, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'

const Navbar = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <div className='nav'>
        <div className='nav-container'>
            <span className='logo'>
               <Link to="/" className='logo-link'>Netbooking</Link>
            </span>
            <div className='nav-links'>
                <Link to="/"><FontAwesomeIcon icon={faHotel} className='nav-icon active' /></Link>
                <Link to="/"><FontAwesomeIcon icon={faPhone} className='nav-icon' /></Link>
            </div>
            <div className='nav-items'>
                {user ? user.user_name : <Link to="/login">
                  <FontAwesomeIcon icon={faUser} className='user-icon' />
                </Link>}
            </div>
        </div>
    </div>
  )
}

export default Navbar