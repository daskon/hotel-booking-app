import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Reserve from '../../components/reserve/Reserve'
import Subscribe from '../../components/subscribe/Subscribe'
import { AuthContext } from '../../context/AuthContext'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import './hotel.css'

const Hotel = () => {

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/')[2];
  const [imgId, setImgId] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const {loading, data, error} = useFetch(`/hotels/find/${id}`);
  const navigate = useNavigate();

  const handleSlider = (id) => {
    setImgId(id);
    setOpenSlider(true);
  }

  const handleMove = (direction) => {
    let newDirection;
    if(direction === "L"){
      newDirection = imgId === 0 ? 5 : imgId - 1;
    }else{
      newDirection = imgId === 5 ? 0 : imgId + 1;
    }
    setImgId(newDirection);
  }

  const {date, options} = useContext(SearchContext);

  const MILLISECONDS_DAY = 1000 * 60 * 60 * 24;
  const dateDifference = (startDate,endDate) => {
    const timeDiff = Math.abs(endDate?.getTime() - startDate?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_DAY);
    return diffDays;
  }
  const daysCount = dateDifference(date[0]?.startDate, date[0]?.endDate);

  const {user} = useContext(AuthContext);

  const hanldeReserve = () => {
    if(user){
      setOpenBooking(true);
    } else {
      navigate('/login');
    }
  }

  return (
    <div>
      {loading ? "Loading Hotel Information..." :
       (<div className='hotel-container'>
        { openSlider &&
          <div className="hotel-slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="gallery-close"
                onClick={()=>setOpenSlider(false)}
              />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="slide-left"
                  onClick={()=>handleMove("L")}
                />
            <div className="slider-wrapper">
              <img src={data.photos[imgId] ? data.photos[imgId] : `https://via.placeholder.com/500`} alt="" className="gallery-image" />
            </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="slide-right"
                onClick={()=>handleMove("R")}
              />
          </div>
        }
        <div className="hotel-wrapper">
            <button className="book-now" onClick={hanldeReserve}>Reserve or Book Now!</button>
            <h1 className="hotel-title">{data.name}</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotel-distance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotel-offers">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotel-gallery">
              {data.photos?.map((photo,id) => (
                <div className="hotel-image-wrapper" key={id}>
                  <img
                    src={photo}
                    onClick={()=>handleSlider(id)}
                    alt="slider image"
                    className="hotel-image" />
                </div>
              ))}
            </div>
            <div className="hotel-details">
              <div className="hotel-details-text">
                <h1 className="hotel-title">{data.title}</h1>
                <p className="hotel-desc">
                  {data.description}
                </p>
              </div>
              <div className="hotel-details-price">
                <h2>Perfect for a {daysCount || 0}-night stay!</h2>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>Rs {data.cheapest_price * daysCount * options.room || data.cheapest_price}</b> ({daysCount || 0} nights)
                </h2>
                <button className='hotel-reserve' onClick={hanldeReserve}>Reserve or Book Now!</button>
              </div>
            </div>
            <div className='hotel-footer'>
              <Subscribe />
              <Footer />
            </div>
        </div>
      </div>)}
      {openBooking && <Reserve setOpenModel={setOpenBooking} hotelid={id} />}
    </div>
  )
}

export default Hotel