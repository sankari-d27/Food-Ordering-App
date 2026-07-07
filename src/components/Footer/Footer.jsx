import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

      <div className="footer-content">

        <div className="footer-content-left">

          <img src={assets.logo} alt="" />

          <p>E-commerece Food Ordering Website using React</p>

          <div className="footer-social-icons">
            <img src={assets.linked_icon} alt="" />
            <img src={assets.github_icon} alt="" />
          </div>

        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>

        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>

          <ul>
            <li>+91-9566331020</li>
            <li>sankaridhakshna@gmail.com</li>

          </ul>
        </div>

      </div>

      <hr/>

      <p className='footer-copyright'>Copyright 2026 @ E-commerece website - All Right reserved</p>

    </div>
  )
}

export default Footer
