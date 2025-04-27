import Image from 'next/image';
import React from 'react';

function Blogs({ img, date, title, description }) {
  return (
    <div className='blog-container'>
    <div className='blog-wrapper'>
      <div className='blog-image-wrapper'>
        {/* Image component with fill property */}
        <Image 
          className='blogImage' 
          src={img} 
          alt='blog image' 
          layout='fill'  // Use layout='fill' if you want the image to fill the parent div
          objectFit='cover'  // Ensure the image scales properly inside its container
        />
      </div>
      <div className='blogDate'>{date}</div>
      <div className='blogTitle'>{title}</div>
      <div className='blogDescription'>{description}</div>
    </div>
  </div>

  )
}

export default Blogs