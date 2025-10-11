import Image from 'next/image'
import React from 'react'
import DairyInfo from './DairyInfo'

function About1() {
  return (
    <div className='about1'>
        
        <div className='about01'>
            <div className='about1'>
            <div><h1>Dairy Production Traditions, Proven by Time</h1></div>
            <div><p>Our artisans carefully follow traditions passed down through generations to ensure every wheel of cheese is flawless. We use only natural ingredients and age our cheeses in special conditions.</p></div>
            <div> <Image src="/signature_black.png" alt="signature" width={180} height={70} /></div>
            </div>

            <div className='about2'>
 <Image src="/about1.webp" alt="signature"  layout="responsive"
    width={300}
    height={300}
    objectFit="cover"/>
            </div>

        </div>
        <div className='about02'></div>
<DairyInfo />
    </div>
  )
}

export default About1