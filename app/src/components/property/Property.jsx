import React from 'react'
import useFetch from '../../hooks/useFetch';
import './property.css'

const Property = () => {
    const {data, loading, error} = useFetch("/hotels/find?featured=true&limit=5");
  return (
    <div className='list-container'>
        {loading ? ("Loading Hotels...") : <>
            { data.map(item=>(
            <div className='list-item' key={item._id}>
                <img src={item.photos[0] ? item.photos[0]
                : `https://via.placeholder.com/150`} alt="list image"
                    className="list-image" />
                <div className="info">
                    <h2 className="list-title">{item.name}</h2>
                    <span className="list-price">Rs {item.cheapest_price} </span>
                    {item.rating && <button className='list-rating'>{item.rating}</button>}
                </div>
            </div>
            ))}
        </>}
    </div>
  )
}

export default Property