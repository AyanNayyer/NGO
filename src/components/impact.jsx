// src/components/Impact.jsx
import React from 'react';
//import '../styles/Impact.css';
// Add a relevant image for impact stories, e.g., src/assets/impact-story-1.jpg
// import impactStoryImage from '../assets/impact-story-1.jpg';

const impactStats = [
  { value: "5000+", label: "Individuals Trained" },
  { value: "1200+", label: "Livelihoods Created" },
  { value: "200+", label: "Villages Reached" },
  { value: "70%", label: "Women Beneficiaries" }
];

const Impact = () => {
  return (
    <section id="impact" className="section impact">
      <div className="container">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-subtitle">
          {/* Placeholder for subtitle */}
          Transforming lives and communities through dedicated effort and measurable outcomes. 
          Our work creates a ripple effect of positive change.
        </p>

        <div className="impact-stats-container">
          {impactStats.map((stat, index) => (
            <div className="impact-stat-item" key={index}>
              <span className="impact-stat-value">{stat.value}</span>
              <span className="impact-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="impact-stories">
          <h3 className="impact-stories-title">Stories of Change</h3>
          {/* You can map through an array of stories here */}
          <div className="impact-story-card">
            <div className="impact-story-image-container">
              {/* <img src={impactStoryImage} alt="Beneficiary story" /> */}
              <img src="https://via.placeholder.com/400x300.png?text=Success+Story" alt="Placeholder" />
            </div>
            <div className="impact-story-content">
              <h4>Sunita's Weaving Enterprise</h4>
              <p className="story-quote">"Karwaan-e-Swarojgaar gave me the skills and confidence to start my own weaving unit. Now, I support my family and employ other women from my village."</p>
              <p className="story-attribution">- Sunita Devi, Artisan from [Village Name]</p>
            </div>
          </div>
          {/* Add more story cards as needed */}
        </div>
        <div className="impact-cta">
            <a href="#donate" className="btn">Support Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
