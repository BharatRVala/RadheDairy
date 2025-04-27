'use client';

import Image from "next/image";
import Header from "./_components/Header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useState, useEffect } from "react";
import Footer from "./_components/Footer";
import DairyInfo from "./_components/DairyInfo";
import Youtubev from "./_components/Youtubev";
import Loading from "./_components/Loading";
import Hiro from "./_components/Hiro";
import ImageSlider from "./_components/ImageSlider";
import Productcard1 from "./_components/Productcard1";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0); 
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    { src: "/team_01.jpg", name: "Rahul Mehta" },
    { src: "/team_02.jpg", name: "Anjali Patel" },
    { src: "/team_03.jpg", name: "Vikas Joshi" },
    { src: "/team_04.jpg", name: "Sneha Desai" },
    { src: "/team_05.jpg", name: "kohli Sharma" },
  ];
  

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <Header />
    
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Hiro title="Home" backgroundImage="/homehiro.jpg" />

          {/* Hero Section */}
          <div className="fcontainer">
            <div className="ffcontainer">
              <h1 className="colore-yello">alpines</h1>
              <h1>Milk The Way Nature Intended</h1>
            </div>
            <div className="sfcontainer">
              <h1>Naturally Delicious, Always Fresh Dairy Products​</h1>
              <Image className="cheese-bw" src="/cheese-bw-1.png" alt="cheese" width={200} height={200} />
            </div>
          </div>

          {/* Cow Image Section */}
          <div className="scontainer">
            <Image className="front-img" src="/cow-front.png" alt="cow" width={800} height={720} />
          </div>

          {/* Product Highlights */}
          <DairyInfo />

          {/* About Dairy */}
          <div className="focontainer">
            <div className="ffocontainer">
              <Image src="/Home_img.jpg" alt="farm" width={700} height={500} />
            </div>
            <div className="sfocontainer">
              <h1>Dairy Production Traditions, Proven by Time</h1>
              <p>Our artisans carefully follow traditions passed down through generations to ensure every wheel of cheese is flawless. We use only natural ingredients and age our cheeses in special conditions.</p>
              <Image src="/signature_black.png" alt="signature" width={180} height={70} />
            </div>
          </div>

          {/* Farming Info */}
          <div className="ficontainer">
            <div className="fficontainer">
              <h1>farming</h1>
              <h2>Our farm uses eco-friendly technologies and practices to minimize the environmental impact. We care for nature as much as we care for our products.</h2>
              <button>Read More</button>
            </div>
            <div className="sficontainer">
              <div className="sficontainer-img">
                <Image src="/farming.jpg" alt="farming" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="sficontainer-img">
                <Image src="/farming_milk.jpg" alt="farming milk" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Cheese Info */}
          <div className="sicontainer">
            <div className="fsicontainer">
              {[
                { title: "creamy.", text: "We are proud to follow centuries-old cheese-making traditions. Every batch of cheese is the result of a long aging process and meticulous effort." },
                { title: "agged.", text: "Our artisans carefully follow traditions passed down through generations to ensure every wheel of cheese is flawless." },
                { title: "natural.", text: "We carefully monitor cows diet to ensure the milk is rich in all the necessary elements for ideal cheese-making." },
              ].map((item, index) => (
                <div key={index}>
                  <h1>{item.title}</h1><br />
                  <hr style={{ backgroundColor: "black", height: "1px", border: "none" }} /><br />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="ssicontainer">
              <Image src="/cheese-big.png" alt="cheese" width={700} height={500} />
            </div>
          </div>

          {/* Products */}
          <div className="secontainer">
            <div className="fsecontainer">
              <h4>buy online</h4>
              <h1>Craft Dairy Products</h1>
            </div>
            <div className='products'>

            <Productcard1
      imgSrc="/milk1.png"
      title="Milk"
      description="Pure, fresh, and full of nutrition. Sourced daily from healthy cows to ensure the highest quality for your family."
      basePrice={60}/>

       <Productcard1
       imgSrc="/buttermilk.png"
       title="Buttermilk"
       description="Naturally refreshing and light. A probiotic-rich drink made with care for cooling comfort and digestive wellness."
       basePrice={40} />

<Productcard1
        imgSrc="/yogurt_bottle.png"
        title="Yogurt"
        description="Smooth, creamy, and loaded with goodness. Made from fresh milk and live cultures for a healthy, delicious treat."
        basePrice={70} />


    </div>
            
          </div>

          {/* Tour Section */}
          <div className="eicontainer">
            <div className="feicontainer">
              <Image className="zoom-img" src="/big_cow_w.jpg" alt="cow" width={400} height={600} />
            </div>
            <div className="seicontainer">
              <h3>visit and taste</h3>
              <h1>Welcome to our Farm Tours</h1>
              {[
                { img: "/tour_01.jpg", title: "Around the Farm", desc: "Step beyond the threshold of the ordinary into a realm where time bends and moments dissolve.", price: "₹499" },
                { img: "/tour_02.jpg", title: "Photosession", desc: "Engage with the intangible as we invite you to explore the spaces between what is seen, heard, and imagined.", price: "₹999" },
                { img: "/tour_03.jpg", title: "Milk Tasting", desc: "This is not a journey but an unfolding a convergence of sound, light, and thought, where the lines between audience", price: "₹799" },
              ].map((item, index) => (
                <div className="fseicontainer" key={index}>
                  <div className="sfseicontainer">
                    <Image className="cheese-bw" src={item.img} alt={item.title} width={100} height={100} />
                  </div>
                  <div className="ffseicontainer">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                  <h1>{item.price}</h1>
                  <div className="book_tour_wrapper"><button>Book Tour</button></div>
                  <hr style={{ backgroundColor: "black", height: "1px", border: "none" }} /><br />
                </div>
              ))}
            </div>
          </div>

      <ImageSlider team={teamMembers}/>

       
          <Youtubev />

          {/* Testimonials */}
          <div className="elcontainer">
            <div>
              <Image className="slider-img" src="/testimonials-bg.png" alt="cow" width={250} height={100} />
            </div>
            <div className="slider-container">
              <Slider {...settings1}>
                {[...Array(3)].map((_, index) => (
                  <div className="slide" key={index}>
                    <p>Work is exceptional, and it’s clear that you put a great deal of effort and thought into every aspect of it. Attention to detail is remarkable, and it sets a high standard.</p>
                    <h1>Stefanie Rashford</h1>
                    <h2>Sales Manager</h2>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
