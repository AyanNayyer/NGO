// src/components/Footer.jsx
import React from 'react';
//import '../styles/Footer.css';
import logoImage from '../assets/logo.jpeg'; // Assuming logo is still here

// Placeholder Social Icons (use an icon library for real ones)
const FacebookIcon = () => <span className="social-icon">📘</span>;
const TwitterIcon = () => <span className="social-icon">🐦</span>;
const InstagramIcon = () => <span className="social-icon">📸</span>;
const LinkedInIcon = () => <span className="social-icon">🔗</span>;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="footer-logo" />
            <p>
              Empowering communities through self-employment and sustainable livelihoods. 
              Join us in making a difference.
            </p>
            {/* Optional: Registration number or tagline */}
            {/* <p className="footer-reg-info">Registered under [Act Name], Reg No: [Your Reg No]</p> */}
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Work</a></li>
              <li><a href="#impact">Impact Stories</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#donate">Donate</a></li> {/* Assuming a donate section/page */}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📍 [Your Address Snippet], City</p> {/* Short Address */}
            <p>📧 <a href="mailto:info@karwaaneswarojgaar.org">info@karwaaneswarojgaar.org</a></p>
            <p>📞 <a href="tel:+910000000000">+91 XXXX XXX XXX</a></p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons-container">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Karwaan-e-Swarojgaar. All Rights Reserved.</p>
          <p>Designed with <span style={{color: "var(--secondary-color)"}}>❤</span> by Ayan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
