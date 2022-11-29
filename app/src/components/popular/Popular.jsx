import React from 'react'
import useFetch from '../../hooks/useFetch.js'
import './popular.css'

const Popular = () => {
    const {data, loading, error} = useFetch("/hotels/countByCity?cities=Kandy,Colombo,Galle");
  return (
    <div className='container'>
        {loading ? ("Loading Hotels...") : <>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK44jnSWpsAGiIlp9DuXPyNluhiRoB5YEREMfv7ZqHAtR6aDyaDICSqqc60sfu6iwlWqU&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Kandy ({data[0]})</h2>
                <span className="price">$1200</span>
            </div>
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-cJmoxzS2xo6ajiMojaHegetEll8uql7pmNdFFalepdzRqys3OLbh_a2u312MCgIxiU&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Colombo ({data[1]})</h2>
                <span className="price">$1000</span>
            </div>
        </div>
        <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EDbxS6li2txxO2YRd7kI_eFr20wwHmWA6MCqiwVMZ54LYo-blm5kRN0xomTZEnkzVTc&usqp=CAU" alt="image" className="display-image" />
            <div className="info">
                <h2 className="title">Galle ({data[2]})</h2>
                <span className="price">$800</span>
            </div>
        </div></>}
    </div>
  )
}

export default Popular