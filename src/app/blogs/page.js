"use client";

import React, { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Loading from '../_components/Loading';
import Hiro from '../_components/Hiro';
import Footer from '../_components/Footer';
import Blogs from '../_components/Blogs';
import './blogs.css'; // also remove parentheses

function BlogsPage() {
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
          <Hiro title="Blogs" backgroundImage="/BlogsHiro.webp" />
          <Blogs 
            img="/homeHiro.webp"
            date="September 10, 2022"
            title="Maintaining quality traditions with a new cheese range"
            description="Cheese is more than just food..."
          />
          <Blogs 
            img="/about1.webp"
            date="September 10, 2022"
            title="Maintaining quality traditions with a new cheese range"
            description="Cheese is more than just food..."
          />
          <Blogs 
            img="/BlogsHiro.webp"
            date="September 10, 2022"
            title="Maintaining quality traditions with a new cheese range"
            description="Cheese is more than just food..."
          />
          <Blogs 
            img="/GalaryHiro.webp"
            date="September 10, 2022"
            title="Maintaining quality traditions with a new cheese range"
            description="Cheese is more than just food..."
          />
          <Footer />
        </div>
      )}
    </>
  );
}

export default BlogsPage;
