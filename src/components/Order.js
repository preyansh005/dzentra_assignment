import React from 'react'
import PropTypes from 'prop-types'
import './Order.css'

export default function Order(props) {
  return (
    <>
        <div className='box'>
            <div className="inner-box">
                <h5 className='name'>{props.name}</h5>
                <h5 className='number'>{props.number}</h5>
            </div>
        </div>
    </>
  )
}

Order.propTypes ={
    name: PropTypes.string,
    number: PropTypes.number
}