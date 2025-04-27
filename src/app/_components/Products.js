import React from 'react'
import Productcard from './Productcard'

function Products() {
  return (
    <div className='products'>
        <Productcard
  imgSrc="/milk1.png"
  title="Milk"
  description="Pure, fresh, and full of nutrition. Sourced daily from healthy cows to ensure the highest quality for your family."
  basePrice={60}
/>

<Productcard
  imgSrc="/buttermilk.png"
  title="Buttermilk"
  description="Naturally refreshing and light. A probiotic-rich drink made with care for cooling comfort and digestive wellness."
  basePrice={40}
/>

<Productcard
  imgSrc="/yogurt_bottle.png"
  title="Yogurt"
  description="Smooth, creamy, and loaded with goodness. Made from fresh milk and live cultures for a healthy, delicious treat."
  basePrice={70}
/>

    </div>
  )
}

export default Products