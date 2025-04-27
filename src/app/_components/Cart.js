"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart)
        setCartItems(Array.isArray(parsedCart) ? parsedCart : [])
      } catch (e) {
        console.error("Error parsing cart:", e)
        setCartItems([])
      }
    }
  }, [])

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cartUpdated'))

    // Show toast notification for item removal
    toast.info("Item removed from cart."); // Notification for item removal
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  const productTotal = calculateTotal()
  const gst = +(productTotal * 0.05).toFixed(2)
  const delivery = cartItems.length > 0 ? 30 : 0
  const grandTotal = productTotal + gst + delivery

  const handleCheckout = async () => {
    setIsLoading(true); // Start loading

    try {
      const token = localStorage.getItem("token"); // Assuming you store login token in localStorage
      if (!token) {
        toast.error("Please login to checkout!"); // Error notification for login
        setIsLoading(false); // Stop loading
        return;
      }
  
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartItems,
          productTotal,
          gst,
          delivery,
          grandTotal,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success("Order placed successfully!"); // Success notification for order placement
        localStorage.removeItem("cart");
        setCartItems([]);
        window.dispatchEvent(new Event('cartUpdated'));
        router.push('/profile');
      } else {
        toast.error(data.error || "Failed to place order."); // Error notification for failed order
      }
    } catch (err) {
      toast.error("Something went wrong during checkout."); // Error notification for server issues
      console.error("Checkout error:", err);
    } finally {
      setIsLoading(false); // Stop loading after processing
    }
  };

  return (
    <div className='cart-page'>
      <h2 className="cart-title">My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className='cartcontainer'>
          <div className="cart-items-wrapper">
            <h1>Cart Items</h1>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <p><strong>Product:</strong> {item.title}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price:</strong> ₹{item.price}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h1>Billing Summary</h1>
            <p>Product Total: ₹{productTotal}</p>
            <p>GST (5%): ₹{gst}</p>
            <p>Delivery Charges: ₹{delivery}</p>
            <hr />
            <p className="grand-total"><strong>Grand Total: ₹{grandTotal}</strong></p>
            <div className="cart-actions">
              <button 
                className="checkout-btn" 
                onClick={handleCheckout} 
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Checkout"}
              </button>
            </div>
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
    </div>
  )
}

export default Cart;
