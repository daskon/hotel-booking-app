import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FaceIcon from '@mui/icons-material/Face';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-container'>
            <div className='nav-items'>
                <div className="notification">
                  <CircleNotificationsIcon className='nav-icons' />
                </div>
                <div className="messages">
                  <MarkEmailUnreadIcon className='nav-icons' />
                </div>
                <div className="settings">
                  <SettingsIcon className='nav-icons' />
                </div>
                <div>
                  <Link to="/login" className='nav-link'>
                     <FaceIcon className='avatar' />
                     <ArrowDropDownIcon />
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar