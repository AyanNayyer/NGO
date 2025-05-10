// src/components/Header.jsx
import { useState, useEffect } from 'react';
import '../styles/header.css'; // Assuming this is how you'd import if using separate files
                               // For a single App.css, this line is not in the component.
import logoImage from '../assets/logo.jpeg'; // Your main NGO logo

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
    // Add body class when menu is open for potential overflow handling
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]); // Rerun effect when isMenuOpen changes

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo-link" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="logo-img" />
          <span className="logo-text">Karwaan-e-Swarojgaar</span>
        </a>
        
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
          {/* Logo inside the mobile menu */}
          <div className="nav-header-mobile">
            <img src={logoImage} alt="Karwaan-e-Swarojgaar Logo" className="nav-logo-img-mobile" />
            {/* Optional: Add NGO name here too if desired */}
            { <span className="nav-logo-text-mobile">Karwaan-e-Swarojgaar</span> }
          </div>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Our Work</a></li>
            <li><a href="#impact" onClick={() => setIsMenuOpen(false)}>Impact</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="#donate" className="btn btn-nav-donate" onClick={() => setIsMenuOpen(false)}>Donate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
