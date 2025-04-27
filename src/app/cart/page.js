"use client";

import React, { useEffect, useState } from 'react';
import Cart from '../_components/Cart';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Loading from '../_components/Loading';
import './cart.css'; // remove parentheses

function CartPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Cart />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default CartPage;
