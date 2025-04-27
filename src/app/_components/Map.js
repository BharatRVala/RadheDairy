import React from 'react';

function Map() {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <iframe
                title="Vavdi Adri, Gujarat Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14847.119037272813!2d70.362167!3d20.998222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzUzLjYiTiA3MMKwMjEnNDMuOCJF!5e0!3m2!1sen!2sin!4v1714032222222!5m2!1sen!2sin"
                  width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Map;
