import React from 'react'
import './sidebar.scss'
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
         <Link to="/" className='logo-link'>Netbooking Admin</Link>
      </div>
      <div className="menus">
        <ul>
          <li>
            <StorefrontIcon color='action' fontSize='small' />
            <span>Dashboard</span>
          </li>
          <p className="menu-title">Manage Users</p>
          <li>
            <GroupIcon color='action' fontSize='small' />
            <span>Users</span>
          </li>
          <p className="menu-title">Manage Hotels</p>
          <li>
            <HomeWorkIcon color='action' fontSize='small' />
            <span>Hotels</span>
          </li>
          <li>
            <HomeIcon color='action' fontSize='small' />
            <span>Rooms</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar