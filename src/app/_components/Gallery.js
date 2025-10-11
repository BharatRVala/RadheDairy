"use client";
import React, { useState } from "react";
import Image from "next/image";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageList = [
    "/team_04.webp",
    "/About_bg.webp",
    "/about1.webp",
    "/big_cow_w.webp",
    "/team_02.webp",
    "/BlogsHiro.webp",
    "/cheese-big.webp",
    "/ContactHiro.webp",
    "/team_05.webp",
    "/cowseating.webp",
    "/farming_milk.webp",
    "/farming.webp",
    "/GalaryHiro.webp",
    "/Home_img.webp",
    "/homehiro.webp",
    "/team_01.webp",
    "/inner_about.webp",
    "/Producthiro.webp",
    "/tour_01.webp",
    "/tour_02.webp",
    "/team_03.webp",
    "/tour_03.webp",
  ];

  return (
    <div className="gallery-wrapper">
      <div className="masonry">
        {imageList.map((src, index) => (
          <div
            className="masonry-item"
            key={index}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="galleryImg"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1000}
              height={700}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
