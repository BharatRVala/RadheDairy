// 'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

function About2() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, []);

  return (
    <div className='about2'>
    
    <div className='about01'>
      <div><Image src="/01_cow.webp" alt="cow" width={450} height={420} /></div>
      <div><h1>  <CountUp key={key} end={87} duration={5} /><br></br></h1><h2>Cows</h2></div>
      <div><p>Our cows are fed only the best grasses and feeds, which directly affects the quality of the milk. We carefully monitor their diet</p></div>
    </div>

    <div className='about01'>
      <div><Image src="/02_goat.webp" alt="goat" width={450} height={420}  /></div>
      <div><h1>  <CountUp key={key} end={236} duration={5} /><br></br></h1><h2>Goats</h2></div>
      <div><p>Our cows are fed only the best grasses and feeds, which directly affects the quality of the milk. We carefully monitor their diet</p></div>
    </div>
    
    <div className='about01'>
      <div><Image src="/03_milk.webp" alt="milk"  width={450} height={420}  /></div>
      <div><h1><CountUp
  key={key}
  end={4000}
  duration={5}
  formattingFn={(val) => `${(val / 1000).toFixed(1)}k+`}
/>
 <br></br></h1> <h2>Liters per day</h2></div>
      <div><p>Our cows are fed only the best grasses and feeds, which directly affects the quality of the milk. We carefully monitor their diet</p></div>
    </div>

    
    </div>
  );
}

export default About2;
