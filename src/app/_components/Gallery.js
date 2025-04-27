import Image from 'next/image'
import React from 'react'



function Gallery() {
  const imageList = [
    
   
   
    '/team_04.jpg',
    '/About_bg.jpg',
    '/about1.jpeg',
    '/big_cow_w.jpg',
    '/team_02.jpg',
    '/BlogsHiro.jpg',
    '/cheese-big.png',
    '/ContactHiro.jpg',
    '/team_05.jpg',
    '/cows eating.png',
    '/farming_milk.jpg',
    '/farming.jpg',
    '/GalaryHiro.jpg',
    '/Home_img.jpg',
    '/homehiro.jpg',
    '/team_01.jpg',
    '/inner_about.jpg',
    '/ProductHiro.jpg',
    '/tour_01.jpg',
    '/tour_02.jpg',
    '/team_03.jpg',
    '/tour_03.jpg',
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
