import React, { useState } from 'react'
import Image from 'next/image'

function Productcard1({ imgSrc, title, description, basePrice }) {


  return (
    <>
      <div className='productcard'>
        <Image
          className='product-img'
          src={imgSrc}
          alt={title}
          height={300}
          width={300}
        />
        <h1>{title}</h1>
        <p>{description}</p>
        
        <h1>₹{basePrice}/1Ltr</h1>

      </div>

  
    </>
  )
}

export default Productcard1
