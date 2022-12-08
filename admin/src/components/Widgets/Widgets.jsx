import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import  './widgets.scss'

const Widgets = (props) => {
  return (
    <div className='widgets'>
        <div className="widget-left">
            <span className="widget-title">{props.title}</span>
            <span className="widget-count">{props.count}</span>
            <span className="widget-view">View All</span>
        </div>
        <div className="widget-right">
            {props.type === 'hotel' && <ApartmentIcon sx={{ fontSize: 60 }} color='success' className='widget-icon' />}
            {props.type === 'room' && <MapsHomeWorkIcon sx={{ fontSize: 60 }} color='success' className='widget-icon' />}
            {props.type === 'user' && <Diversity3Icon sx={{ fontSize: 60 }} color='success' className='widget-icon' />}
            {props.type === 'booking' && <LibraryBooksIcon sx={{ fontSize: 60 }} color='success' className='widget-icon' />}
        </div>
    </div>
  )
}

export default Widgets