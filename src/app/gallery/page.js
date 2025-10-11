"use client";

import React, { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Loading from '../_components/Loading';
import Hiro from '../_components/Hiro';
import Footer from '../_components/Footer';
import Gallery from '../_components/Gallery';
import './gallery.css'; // Corrected import

function GalleryPage() {
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
          <Hiro title="Gallery" backgroundImage="/galleryhiro.webp" />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default GalleryPage;
