import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider({ team = [] }) {
  const PrevArrow = ({ onClick }) => (
    <div className="slider-arrow slider-arrow-left" onClick={onClick}>
      <FaChevronLeft size={20} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="slider-arrow slider-arrow-right" onClick={onClick}>
      <FaChevronRight size={20} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-heading">
        <h1>
          Our farm is not just a production facility but also an open space for
          visitors. We invite everyone to see how our products are made
        </h1>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
        {team.map((member, index) => (
  <div key={index} className="slider-slide">
    <Image
      src={member.src}
      alt={member.name || `Team member ${index + 1}`}
      width={300}
      height={300}
      className="slider-image"
    />
    {member.name && (
      <h3 className="slider-name">{member.name}</h3>
    )}
  </div>
))}

        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
