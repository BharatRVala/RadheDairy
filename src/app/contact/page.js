"use client";
import React, { useEffect, useState } from 'react'
import Header from '../_components/Header'
import Loading from '../_components/Loading';
import Hiro from '../_components/Hiro';
import Footer from '../_components/Footer';
import Map from '../_components/Map';
import ContactInfo from '../_components/ContactInfo';
import('./contact.css')
function contact() {
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
  <Hiro title="Contact Us" backgroundImage="/ContactHiro.jpg" />
  <ContactInfo />
  <Map />
 <Footer />
</div>
)}
 </>
)
}

export default contact