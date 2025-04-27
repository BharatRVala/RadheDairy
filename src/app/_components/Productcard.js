'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Productcard({ imgSrc, title, description, basePrice }) {
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(basePrice)

  const handleChange = (e) => {
    const qty = parseInt(e.target.value)
    setQuantity(qty)
    setPrice(basePrice * qty)
  }

  const handlecart = () => {
    const newItem = { price, quantity, title };

    let existingCart = [];
    try {
      const storedCart = localStorage.getItem("cart");
      existingCart = storedCart ? JSON.parse(storedCart) : [];
      if (!Array.isArray(existingCart)) existingCart = [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      existingCart = [];
    }

    existingCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Dispatch event to update cart count in header
    window.dispatchEvent(new Event("cartUpdated"));

    // Toastify notification
    toast.success(`${title} added to cart!`); // Success notification

    console.log("Cart updated:", existingCart);
  };

  return (
    <>
      <div className='productcard'>
        <Image
          className='product-img'
          src={imgSrc}
          alt={title}
          height={300}
          width={300}
          onClick={() => setShowModal(true)}
        />
        <h1>{title}</h1>
        <p>{description}</p>
        <select className="quantity" onChange={handleChange}>
          <option value="1">1ltr</option>
          <option value="2">2ltr</option>
          <option value="3">3ltr</option>
        </select>
        <h1>₹{price}</h1>
        <button className='AddButton' onClick={handlecart}>Add To Cart</button>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image src={imgSrc} alt={title} width={500} height={500} />
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
          </div>
        </div>
      )}

      {/* Toastify ToastContainer component */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Productcard
