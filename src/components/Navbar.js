import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <i className="fa-solid fa-bars"></i>
        <div className='right-grp'>
            <div className='right-grp-1'>
            <i className="fa-solid fa-circle-plus"></i>
            <i className="fa-solid fa-tag"></i>
            <i className="fa-solid fa-user"></i>
            </div>

            <div className='right-grp-2'>
                <h5>English</h5>
            <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
    </div>
  )
}
