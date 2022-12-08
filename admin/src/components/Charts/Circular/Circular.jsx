import React from 'react'
import './circular.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circular = () => {
  return (
    <div className='circular'>
        <div className="circular-top">
            <h2 className="circular-title">Revenue Percentage</h2>
        </div>
        <div className="circular-bottom">
            <div className="circular-chart">
                <CircularProgressbar
                    value={50}
                    text={'50%'}
                    strokeWidth={4} />
                <p className="circular-total">Total: <b>$ 3450</b></p>
            </div>
        </div>
    </div>
  )
}

export default Circular