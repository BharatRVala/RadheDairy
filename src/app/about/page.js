"use client";
import React, { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Hiro from '../_components/Hiro';
import About1 from '../_components/About1';
import Youtubev from '../_components/Youtubev';
import About2 from '../_components/About2';
import './about.css';
import Loading from '../_components/Loading';
import ImageSlider from '../_components/ImageSlider';
import About3 from '../_components/About3';
import Footer from '../_components/Footer';

function About() {
  const [loading, setLoading] = useState(true);
  const teamMembers = [
    { src: "/team_01.jpg"},
    { src: "/team_02.jpg"},
    { src: "/team_03.jpg"},
    { src: "/team_04.jpg"},
    { src: "/team_05.jpg"},
  ];
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
    <Hiro title="About Us" backgroundImage="/inner_about.jpg" />
    <About1 />
    <Youtubev />
    <About2 />
    <ImageSlider team={teamMembers} />
    <About3 />
    <Footer />
  </div>
)}

    </>
  );
}

export default About;
