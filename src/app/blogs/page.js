"use client";
import React, { useEffect, useState } from 'react'
import Header from '../_components/Header'
import Loading from '../_components/Loading';
import Hiro from '../_components/Hiro';
import Footer from '../_components/Footer';
import Blogs from '../_components/Blogs';
import ('./blogs.css')
function blogs() {
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
  <Hiro title="Blogs" backgroundImage="/BlogsHiro.jpeg" />
  <Blogs 
   img="/homeHiro.jpg"
   date="September 10, 2022"
   title="Maintaining quality traditions with a new cheese range"
   description="Cheese is more than just food; it is a timeless craft that has graced tables for centuries, celebrated for its diversity, flavors, and cultural significance. The journey of cheese, from a fresh drop of milk to a perfectly aged wheel, is a fascinating story of tradition, science, and artistry. Let’s explore the intricate process of cheese making, the role of farmers and cheesemakers, and its enduring appeal. Cheese making dates back thousands of years, with origins that are believed to coincide with the domestication of animals. Ancient cultures discovered that"
  />

<Blogs 
   img="/about1.jpeg"
   date="September 10, 2022"
   title="Maintaining quality traditions with a new cheese range"
   description="Cheese is more than just food; it is a timeless craft that has graced tables for centuries, celebrated for its diversity, flavors, and cultural significance. The journey of cheese, from a fresh drop of milk to a perfectly aged wheel, is a fascinating story of tradition, science, and artistry. Let’s explore the intricate process of cheese making, the role of farmers and cheesemakers, and its enduring appeal. Cheese making dates back thousands of years, with origins that are believed to coincide with the domestication of animals. Ancient cultures discovered that"
  />

<Blogs 
   img="/BlogsHiro.jpg"
   date="September 10, 2022"
   title="Maintaining quality traditions with a new cheese range"
   description="Cheese is more than just food; it is a timeless craft that has graced tables for centuries, celebrated for its diversity, flavors, and cultural significance. The journey of cheese, from a fresh drop of milk to a perfectly aged wheel, is a fascinating story of tradition, science, and artistry. Let’s explore the intricate process of cheese making, the role of farmers and cheesemakers, and its enduring appeal. Cheese making dates back thousands of years, with origins that are believed to coincide with the domestication of animals. Ancient cultures discovered that"
  />

<Blogs 
   img="/GalaryHiro.jpg"
   date="September 10, 2022"
   title="Maintaining quality traditions with a new cheese range"
   description="Cheese is more than just food; it is a timeless craft that has graced tables for centuries, celebrated for its diversity, flavors, and cultural significance. The journey of cheese, from a fresh drop of milk to a perfectly aged wheel, is a fascinating story of tradition, science, and artistry. Let’s explore the intricate process of cheese making, the role of farmers and cheesemakers, and its enduring appeal. Cheese making dates back thousands of years, with origins that are believed to coincide with the domestication of animals. Ancient cultures discovered that"
  />
 <Footer />
</div>
)}
 </>
)
}

export default blogs