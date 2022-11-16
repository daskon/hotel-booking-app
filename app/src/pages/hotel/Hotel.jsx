import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Subscribe from '../../components/subscribe/Subscribe'
import './hotel.css'

const Hotel = () => {

  const [imgId, setImgId] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

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

  return (
    <div>
      <div className='hotel-container'>
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
              <img src={photos[imgId].src} alt="" className="gallery-image" />
            </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="slide-right"
                onClick={()=>handleMove("R")}
              />
          </div>
        }
        <div className="hotel-wrapper">
            <button className="book-now">Reserve or Book Now!</button>
            <h1 className="hotel-title">Tower Street Apartments</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="hotel-distance">
              Excellent location – 500m from center
            </span>
            <span className="hotel-offers">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotel-gallery">
              {photos.map((photo,id) => (
                <div className="hotel-image-wrapper">
                  <img
                    src={photo.src}
                    onClick={()=>handleSlider(id)}
                    alt="slider image"
                    className="hotel-image" />
                </div>
              ))}
            </div>
            <div className="hotel-details">
              <div className="hotel-details-text">
                <h1 className="hotel-title">Stay in the heart of City</h1>
                <p className="hotel-desc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.
                </p>
              </div>
              <div className="hotel-details-price">
                <h2>Perfect for a 9-night stay!</h2>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button className='hotel-reserve'>Reserve or Book Now!</button>
              </div>
            </div>
            <div className='hotel-footer'>
              <Subscribe />
              <Footer />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hotel