import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";

function Youtubev() {

     const [isOpen, setIsOpen] = useState(false);
    
      const openPopup = () => setIsOpen(true);
      const closePopup = () => setIsOpen(false);
  return (
    <div>
        
         <div className="tecontainer">
                  <div>
                    <h1>Work Every Day to Produce Delicious and Fresh Milk</h1>
                  </div>
        
                  <div className="video-wrapper">
                    <div className="play-button" onClick={openPopup}>
                      <FaPlay />
                    </div>
                    {isOpen && (
                      <div className="popup-overlay">
                        <div className="popup-content">
                          <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/CszZ2VsmOq0"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <button className="close-button" onClick={closePopup}>×</button>
                        </div>
                      </div>
                    )}
                  </div>
        
                  <div>
                    <h1>video tour</h1>
                  </div>
                </div>
        
    </div>
  )
}

export default Youtubev