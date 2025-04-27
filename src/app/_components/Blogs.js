import Image from 'next/image'
import React from 'react'

function Blogs({ img, date, title, description }) {
  return (
    <div className='blog-container'>
      <div className='blog-wrapper'>
        <div className='blog-image-wrapper'>
          <Image className='blogImage' src={img} alt='blog image' fill />
        </div>
        <div className='blogDate'>{date}</div>
        <div className='blogTitle'>{title}</div>
        <div className='blogDescription'>{description}</div>
      </div>
    </div>
  )
}

export default Blogs