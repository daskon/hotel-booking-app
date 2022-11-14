import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Popular from '../../components/popular/Popular'
import Property from '../../components/property/Property'
import Subscribe from '../../components/subscribe/Subscribe'
import Listing from '../listing/Listing'
import './home.css'

const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-container">
            <Popular />
            <h2>Browse by property type</h2>
            <Property />
            <Subscribe />
            <Footer />
        </div>
    </div>
  )
}

export default Home