import React from 'react'
import './dashboard.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widgets from '../../components/Widgets/Widgets'
import Revenuechart from '../../components/Charts/Revenuechart/Revenuechart'
import Circular from '../../components/Charts/Circular/Circular'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="db-content">
        <Navbar/>
        <div className="db-widgets">
          <Widgets title={'HOTELS'} count={20} type={'hotel'} />
          <Widgets title={'ROOMS'} count={140} type={'room'} />
          <Widgets title={'USERS'} count={400} type={'user'} />
          <Widgets title={'BOOKINGS'} count={50} type={'booking'} />
        </div>
        <div className="chart-container">
          <Revenuechart/>
          <Circular/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard