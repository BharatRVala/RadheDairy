"use client";

import React, { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Loading from '../_components/Loading';
import Hiro from '../_components/Hiro';
import Footer from '../_components/Footer';
import Products from '../_components/products';
import './products.css'; // Corrected CSS import

function ProductsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Hiro title="Products" backgroundImage="/productHiro.jpeg" />
          <Products />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ProductsPage;

