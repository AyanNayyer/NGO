// src/components/Header.jsx
import { useState, useEffect } from 'react';
//import '../styles/Header.css';
import logoImage from '../assets/logo.jpeg'; // Make sure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo-link">
          <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="logo-img" />
          <span className="logo-text">Karwaan-e-Swarojgaar</span>
        </a>
        
        <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Our Work</a></li>
            <li><a href="#impact" onClick={() => setIsMenuOpen(false)}>Impact</a></li>
            {/* Team might be optional, consider if you have content */}
            {/* <li><a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a></li> */}
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="#donate" className="btn btn-nav-donate" onClick={() => setIsMenuOpen(false)}>Donate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
