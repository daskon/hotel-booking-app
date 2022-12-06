import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import './reserve.css'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Reserve = ({setOpenModel, hotelid}) => {
  const [selectedRoom, setSelectedRoom] = useState([]);
  const {data, loading, error} = useFetch(`/hotels/rooms/` + hotelid);
  const {date} = useContext(SearchContext);
  const naviagate = useNavigate();

  const getDateRange = (start,end) => {
    const createDate = new Date(start.getTime());
    let list = [];
    while(createDate <= end){
      list.push(new Date(createDate).getTime());
      createDate.setDate(createDate.getDate()+1);
      return list;
    }
  }

  const bookingDates = (getDateRange(date[0].startDate, date[0].endDate));

  const isAvailable = (roomNum) => {
    const reserved = roomNum.unavailable_on.some(date=>
      bookingDates.includes(new Date(date).getTime()));
      return !reserved;
  }

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      selected ? [...selectedRoom, value]
      : selectedRoom.filter((item) => item !== value));
  }

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRoom.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: bookingDates,
          });
          return res.data;
        })
      );
      setOpenModel(false);
      naviagate("/");
    } catch (err) {}
  }

  return (
    <div className='reserve'>
        <div className="reserve-container">
            <FontAwesomeIcon icon={faCircleXmark} className="re-close" onClick={()=>setOpenModel(false)} />
        <span>Select Rooms: </span>
        {data.map((item)=>(
          <div className="rooms-list">
            <div className="room-info">
              <div className="room-title">Title: <b>{item.title}</b></div>
              <div className="room-desc">Description: <b>{item.desc}</b></div>
              <div className="room-price">Price: <b>{item.price}</b></div>
              <div className="room-maxppl">Max people: <b>{item.max_people}</b></div>
            </div>
            <div className="bookroom">
              {item.room_numbers.map((room)=>(
                <div className="room">
                  <label htmlFor="">Room Number: {room.number}</label>
                  <input type="checkbox" value={room._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(room)} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserve} className="reserve-btn">Reserve Now</button>
        </div>
    </div>
  )
}

export default Reserve