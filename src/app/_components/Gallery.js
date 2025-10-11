import Image from 'next/image'
import React from 'react'



function Gallery() {
  const imageList = [
    
   
   
    '/team_04.webp',
    '/About_bg.webp',
    '/about1.webp',
    '/big_cow_w.webp',
    '/team_02.webp',
    '/BlogsHiro.webp',
    '/cheese-big.webp',
    '/ContactHiro.webp',
    '/team_05.webp',
    '/cowseating.webp',
    '/farming_milk.webp',
    '/farming.webp',
    '/GalaryHiro.webp',
    '/Home_img.webp',
    '/homehiro.webp',
    '/team_01.webp',
    '/inner_about.webp',
    '/Producthiro.webp',
    '/tour_01.webp',
    '/tour_02.webp',
    '/team_03.webp',
    '/tour_03.webp',
  ]
  return (
    <div className='gallery'>
      {imageList.map((src, index) => (
        <div key={index} className='imgWrapper'>
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            layout="responsive"
            width={500}
            height={0}
            className='galleryImg'
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
