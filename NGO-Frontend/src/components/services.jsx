// src/components/Services.jsx
import React from 'react';
//import '../styles/Services.css';

// Example icons (you can replace with an icon library like Font Awesome or Material Icons)
const IconTraining = () => <span className="service-icon">🎓</span>; // Placeholder icon
const IconProduction = () => <span className="service-icon">⚙️</span>; // Placeholder icon
const IconMarketing = () => <span className="service-icon">📈</span>; // Placeholder icon
const IconCommunity = () => <span className="service-icon">🤝</span>; // Placeholder icon
const IconResources = () => <span className="service-icon">🛠️</span>; // Placeholder icon
const IconAwareness = () => <span className="service-icon">📢</span>; // Placeholder icon


const servicesData = [
  {
    icon: <IconTraining />,
    title: "Skill Development & Training",
    description: "Providing comprehensive training in Khadi production (cotton, silk, wool), weaving, and other village industries to empower artisans, especially women and marginalized groups. (Ref: Point 10, 13, 14 of your document)",
  },
  {
    icon: <IconProduction />,
    title: "Production Support",
    description: "Facilitating the production of high-quality Khadi and village industry products by providing access to raw materials, modern equipment, and technical guidance. (Ref: Point 13, 14)",
  },
  {
    icon: <IconMarketing />,
    title: "Market Linkages & Sales",
    description: "Assisting artisans in marketing and selling their products through wholesale, retail channels, and creating sustainable market connections. (Ref: Point 13)",
  },
  {
    icon: <IconResources />,
    title: "Resource Mobilization",
    description: "Connecting individuals and groups with government schemes (e.g., Khadi and Village Industries Board) and other resources for establishing self-employment ventures. (Ref: Point 15, 16)",
  },
  {
    icon: <IconCommunity />,
    title: "Community Development",
    description: "Working towards the comprehensive development of artisans and their communities, focusing on economic self-reliance and social upliftment. (Ref: Point 10)",
  },
  {
    icon: <IconAwareness />,
    title: "Awareness & Advocacy",
    description: "Promoting Khadi and village industries, and advocating for policies that support traditional artisans and rural entrepreneurship. (Based on general NGO activities)",
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Work & Programs</h2>
        <p className="section-subtitle">
          {/* Extract this from your document or write a summary */}
          Karwaan-e-Swarojgaar is committed to holistic development through a range of targeted initiatives. 
          Our programs are designed to equip individuals with skills, resources, and opportunities for a self-reliant future.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a href="#contact" className="service-card-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
