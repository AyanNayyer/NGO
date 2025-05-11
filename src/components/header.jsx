// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/header.css';
import logoImage from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Function to handle navigation clicks
  const handleNavClick = () => {
    // Close menu with a slight delay to ensure the click is processed
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-hidden="true"
      />
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <ScrollLink 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="logo-link"
            onClick={handleNavClick}
          >
            <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="logo-img" />
            <span className="logo-text">Karwaan-e-Swarojgaar</span>
          </ScrollLink>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            {/* Mobile menu header with close button */}
            <div className="nav-header-mobile">
              <div className="nav-header-content">
                <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="nav-logo-img-mobile" />
                <span className="nav-logo-text-mobile">Karwaan-e-Swarojgaar</span>
              </div>
              <button 
                className="nav-close-button" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <ul className="nav-list">
              <li>
                <ScrollLink 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="nav-link" // Added specific class
                  activeClass="active-link"
                  onClick={handleNavClick}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="nav-link" // Added specific class
                  activeClass="active-link"
                  onClick={handleNavClick}
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="services" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="nav-link" // Added specific class
                  activeClass="active-link"
                  onClick={handleNavClick}
                >
                  Our Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="impact" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="nav-link" // Added specific class
                  activeClass="active-link"
                  onClick={handleNavClick}
                >
                  Impact
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="nav-link" // Added specific class
                  activeClass="active-link"
                  onClick={handleNavClick}
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="donate" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="btn btn-nav-donate"
                  onClick={handleNavClick}
                >
                  Donate
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
