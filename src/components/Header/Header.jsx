import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} className="logo" alt="" />

        <ul className='header-menu'>
            <li>Home</li>
            <li>
              <a href='#programs'>Programs</a>
            </li>
            <li>
              <a href='#reasons'>
                Why us
              </a>
            </li>
            <li>
              <a href='#plans'>
                Plans
              </a>
            </li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header