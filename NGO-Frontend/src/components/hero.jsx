// src/components/Hero.jsx
//import '../styles/Hero.css';
// You should find a high-quality, relevant background image for your NGO
// and place it in src/assets/. For example: src/assets/ngo-hero-bg.jpg
// For now, I'll use a placeholder or assume you have one.
// import heroBgImage from '../assets/ngo-hero-bg.jpg'; 


const Hero = () => {
  return (
    <section id="home" className="hero" /* style={{ backgroundImage: `url(${heroBgImage})` }} */>
      <div className="hero-overlay"></div>
      <div className="container hero-content-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Karwaan-e-Swarojgaar: <span className="highlight">Empowering Futures,</span> Weaving Self-Reliance
          </h1>
          <p className="hero-subtitle">
            Dedicated to fostering sustainable livelihoods and economic independence through Khadi & Village Industries, skill development, and community support.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn">Discover Our Mission</a>
            <a href="#contact" className="btn btn-secondary">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
