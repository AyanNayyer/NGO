// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';
import logoImage from '../assets/logo.jpeg';
import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

// Placeholder Social Icons (use an icon library for real ones)
// const FacebookIcon = () => <span className="social-icon">📘</span>;
// const TwitterIcon = () => <span className="social-icon">🐦</span>;
// const InstagramIcon = () => <span className="social-icon">📸</span>;
// const LinkedInIcon = () => <span className="social-icon">🔗</span>;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <img 
              src={logoImage} 
              alt="Karwaan-e-Swarozgar Logo" 
              className="footer-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150x150?text=Karwaan-e-Swarozgar';
              }}
            />
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
            <p>📍 Prafulla Plaza, Makhania Kuan, Patna.</p> {/* Short Address */}
            <p>📧 <a href="mailto:contact@karwaanes.org">contact@karwaanes.org</a></p>
            <p>📞 <a href="tel:+917086846283">+91 7086 846 283</a></p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons-container">
            <a href="tel:+917086846283" aria-label="Phone"><FaPhone /></a>
              <a href="mailto:ayannayyer@gmail.com" aria-label="Email"><FaEnvelope /></a>
              <a href="https://twitter.com/ayannayyer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com/ayannayyer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Karwaan-e-Swarozgar. All Rights Reserved.</p>
          <p>
            Designed with <span style={{color: "var(--secondary-color)"}}>❤</span> by{' '}
            <a 
              href="https://ayannayyer.live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Ayan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
