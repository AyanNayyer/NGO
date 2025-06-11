// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/header.css';
import logoImage from '../assets/logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <ScrollLink 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="logo-link"
        >
          <img src={logoImage} alt="Karwaan-e-Swarozgar Logo" className="logo-img" />
          <span className="logo-text">Karwaan-e-Swarozgar</span>
        </ScrollLink>
        
        {/* Mobile donate button - only visible on smaller screens */}
        <ScrollLink 
          to="donate" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="btn btn-mobile-donate"
        >
          Donate
        </ScrollLink>
        
        {/* Desktop Navigation - only visible on larger screens */}
        <nav className="nav desktop-only">
          <ul className="nav-list">
            <li>
              <ScrollLink 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="nav-link"
                activeClass="active-link"
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
                className="nav-link"
                activeClass="active-link"
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
                className="nav-link"
                activeClass="active-link"
              >
                Our Work
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink 
                to="impact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="nav-link"
                activeClass="active-link"
              >
                Impact
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="nav-link"
                activeClass="active-link"
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
              >
                Donate
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
