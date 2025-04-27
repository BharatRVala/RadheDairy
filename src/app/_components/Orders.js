"use client";
import React, { useEffect, useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const res = await fetch("/api/order", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      if (res.ok) {
        const sortedOrders = data.orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sortedOrders);
      } else {
        alert(data.error || "Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Fetch orders error:", error);
      alert("Something went wrong while fetching orders.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading-text">Loading Orders...</div>;
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders-text">You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order, idx) => (
  <div key={order._id} className="order-card">
    <h3 className="order-number">Order #{orders.length - idx}</h3>
    <p><strong>Grand Total:</strong> ₹{order.grandTotal}</p>
    <p><strong>Product Total:</strong> ₹{order.productTotal}</p>
    <p><strong>GST:</strong> ₹{order.gst}</p>
    <p><strong>Delivery Charges:</strong> ₹{order.delivery}</p>

    <div className="order-items">
      <h4>Items:</h4>
      <ul>
        {order.cartItems.map((item, i) => (
          <li key={i}>
            {item.title} - Qty: {item.quantity} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>

    <p className="order-date">
      Ordered on: {new Date(order.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    </p>
  </div>
))}

        </div>
      )}
    </div>
  );
}

export default Orders;
