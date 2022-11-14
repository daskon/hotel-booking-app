import React from 'react'
import './popular.css'

const Popular = () => {
  return (
    <div className='container'>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK44jnSWpsAGiIlp9DuXPyNluhiRoB5YEREMfv7ZqHAtR6aDyaDICSqqc60sfu6iwlWqU&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Lorum ipsome</h2>
                <span className="price">$1200</span>
            </div>
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-cJmoxzS2xo6ajiMojaHegetEll8uql7pmNdFFalepdzRqys3OLbh_a2u312MCgIxiU&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Lorum ipsome</h2>
                <span className="price">$1000</span>
            </div>
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EDbxS6li2txxO2YRd7kI_eFr20wwHmWA6MCqiwVMZ54LYo-blm5kRN0xomTZEnkzVTc&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Lorum ipsome</h2>
                <span className="price">$800</span>
            </div>
        </div>
    </div>
  )
}

export default Popular