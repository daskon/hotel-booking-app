import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faHotTubPerson, faLocation, faMugHot, faPerson, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'

const Header = () => {

    const [toggleDate, setToggle] = useState(false);
    const [toggleOptions, setToggleOption] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const handleOption = (name,operation) => {
        setOptions((prev) => {
            return{
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-list'>
                <h1 className='header-text'>Find the best deals</h1>
                <h3 className='sub-title'>600+ beds, 5 hotels</h3>
                <div className='icon-list'>
                    <FontAwesomeIcon icon={faBed} className='icon' />
                    <FontAwesomeIcon icon={faWifi} className='icon' />
                    <FontAwesomeIcon icon={faHotTubPerson} className='icon' />
                    <FontAwesomeIcon icon={faMugHot} className='icon' />
                </div>
            </div>
            <div className='header-search'>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faLocation} className='' />
                        <input type="text"
                            placeholder="Where are you looking for?"
                            className="header-search-input"
                        />
                    </div>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faCalendarDays} className='' />
                        <span onClick={() => setToggle(!toggleDate)} className='header-search-text'>
                            {`${format(date[0].startDate,'MM/dd/yyy')} to
                                ${format(date[0].endDate,'MM/dd/yyy')}`
                            }
                        </span>
                        { toggleDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='check-date'
                        />}
                    </div>
                    <div className='header-search-item'>
                        <FontAwesomeIcon icon={faPerson} />
                        <span
                            onClick={() => setToggleOption(!toggleOptions)}
                            className='header-search-text'>{options.adult} adults, {options.children} childrens, {options.room} rooms</span>
                        { toggleOptions && <div className="dropdown-menu">
                            <div className="dd-item">
                                <span className="dd-text">Adult</span>
                                <div className="dd-options">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="dd-btn"
                                        onClick={() => handleOption("adult","d")}>-</button>
                                    <span className="dd-count">{options.adult}</span>
                                    <button className="dd-btn" onClick={() => handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="dd-item">
                                <span className="dd-text">Children</span>
                                <div className="dd-options">
                                    <button
                                        disabled={options.children <= 0}
                                        className="dd-btn"
                                        onClick={() => handleOption("children","d")}>-</button>
                                    <span className="dd-count">{options.children}</span>
                                    <button className="dd-btn" onClick={() => handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="dd-item">
                                <span className="dd-text">Room</span>
                                <div className="dd-options">
                                    <button
                                        disabled={options.room <= 1}
                                        className="dd-btn"
                                        onClick={() => handleOption("room","d")}>-</button>
                                    <span className="dd-count">{options.room}</span>
                                    <button className="dd-btn" onClick={() => handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='header-search-item'>
                        <button className='header-search-btn'>Filter</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header