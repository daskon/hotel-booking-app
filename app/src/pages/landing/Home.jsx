import React from 'react'
import Header from '../../components/header/Header'
import Popular from '../../components/popular/Popular'
import Property from '../../components/property/Property'
import Listing from '../listing/Listing'
import './home.css'

const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-container">
            <Popular />
            <h2>Browse List</h2>
            <Property />
        </div>
    </div>
  )
}

export default Home