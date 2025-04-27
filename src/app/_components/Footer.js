import React from 'react';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h2 className="footer-title">Radhe Dairy</h2>
          <p className="footer-text">
            Radhe Dairy provides fresh and quality dairy products sourced locally with care.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-text">📞 +91 9998021796
          </p>
          <p className="footer-text">📧 contact@interngalaxy.in </p>
          <p className="footer-text">📍 Ahmedabad, Gujarat</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Social Media</h2>
          <div className="social-icons">
            <a href="#"><IoLogoInstagram /></a>
            <a href="#"><IoLogoFacebook /></a>
            <a href="#"><IoLogoTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p>Made With ❤ By INTERNGALAXY</p>
      </div>
    </footer>
  );
}

export default Footer;
