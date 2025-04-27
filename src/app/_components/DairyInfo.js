import Image from 'next/image'
import React from 'react'

function DairyInfo() {
  return (
    <div>
         <div className="tcontainer">
                  {[
                    { icon: "/nature-product.png", title: "100% Organic Product", desc: "Guaranteed quality from our farm to your table" },
                    { icon: "/animal.png", title: "High Quality Milk", desc: "Freshness and naturalness are the main principles of our production" },
                    { icon: "/cheese.png", title: "Wide Assortment", desc: "We produce not only traditional but also innovative products" },
                    { icon: "/milk.png", title: "Perfect Packaging", desc: "Freshness and naturalness are the main principles of our production" },
                  ].map((item, index) => (
                    <div key={index}>
                      <Image className="cheese-bw" src={item.icon} alt={item.title} width={70} height={70} />
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
    </div>
  )
}

export default DairyInfo