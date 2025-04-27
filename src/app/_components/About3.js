import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { HiOutlineLocationMarker } from "react-icons/hi";


import React from 'react'


function About() {
  return (
    <div className='about3'>
      <div className='about01'>
<div className='about1'>VISIT US ANYTIME</div>
<div className='about2'><h1>Why are our dairy products so delicious? Discover the secret!</h1></div>

      </div>
      <div className='about02'>

      <div className="contact-wrapper">
      <div className="contact-box">
        <FiPhone className="icon" />
        <h3>Phone:</h3>
        <p>0-900-856-05-39</p>
        <p>0-900-856-05-45</p>
      </div>

      <div className="contact-box">
        <HiOutlineLocationMarker className="icon" />
        <h3>Address:</h3>
        <p>975 Liberty Avenue,</p>
        <p>Union, NJ 07083, USA</p>
      </div>

      <div className="contact-box">
        <FiMail className="icon" />
        <h3>Email:</h3>
        <p>support@milatte-dairy.com</p>
        <p>sales@milatte-dairy.com</p>
      </div>

      <div className="contact-box">
        <FiClock className="icon" />
        <h3>Working Hours:</h3>
        <p>Mon – Sat: 6am – 8pm</p>
        <p>Sunday: 8am – 4pm</p>
      </div>
    </div>

      </div>
    </div>
  )
}
export default About