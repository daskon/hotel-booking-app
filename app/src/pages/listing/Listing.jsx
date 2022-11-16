import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import './listing.css'
import Listings from '../../components/listings/Listings';

const Listing = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOption] = useState(location.state.options);
  const [toggleDatePick, setToggleDatePick] = useState(false);

  return (
    <div className='search-container'>
      <div className="search-wrapper">
        <div className="filters">
           <h4>Search Filters</h4>
           <div className="search-item">
              <label style={{fontSize:'13px'}}>Destination</label>
              <input type="text" className='keyword' placeholder={destination} />
           </div>
           <div className="search-item">
              <label style={{fontSize:'13px'}}>Check-in Date</label>
              <span
                onClick={() => setToggleDatePick(!toggleDatePick)}
                style={{fontSize:'12px', cursor: 'pointer'}}>
                  {`${format(date[0].startDate,'MM/dd/yyy')} to
                      ${format(date[0].endDate,'MM/dd/yyy')}`
                  }
              </span>
              { toggleDatePick && <DateRange
                onChange={(item)=>setDate([item.selection])}
                minDate={new Date()}
                range={date}
              />}
            </div>
           <div className="search-item">
           <label>Options</label>
              <div className="search-options">
                <div className="option-item">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="input-options" />
                </div>
                <div className="option-item">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="input-options" />
                </div>
                <div className="option-item">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="input-options"
                    placeholder={options.adult}
                  />
                </div>
                <div className="option-item">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="input-options"
                    placeholder={options.children}
                  />
                </div>
                <div className="option-item">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="input-options"
                    placeholder={options.room}
                  />
                </div>
                <button style={{borderRadius: '15px'}}>Filter</button>
              </div>
           </div>
        </div>
        <div className="search-result">
            <div className="filter-records">
              <Listings />
              <Listings />
              <Listings />
              <Listings />
              <Listings />
              <Listings />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Listing