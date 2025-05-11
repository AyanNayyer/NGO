// src/components/Services.jsx
import React from 'react';
import '../styles/services.css';

// Example icons (you can replace with an icon library like Font Awesome or Material Icons)
const IconTechnical = () => <span className="service-icon">💻</span>;
const IconHealthcare = () => <span className="service-icon">🏥</span>;
const IconSocial = () => <span className="service-icon">🤝</span>;
const IconSkills = () => <span className="service-icon">🎯</span>;
const IconLivelihood = () => <span className="service-icon">🌱</span>;
const IconImpact = () => <span className="service-icon">🌍</span>;

const servicesData = [
  {
    icon: <IconTechnical />,
    title: "Technical Empowerment",
    description: "Comprehensive training in computer skills, data analysis, software development, and electronic device maintenance. Our programs focus on practical skills that lead to immediate employment opportunities in the digital economy.",
  },
  {
    icon: <IconHealthcare />,
    title: "Healthcare Training",
    description: "Specialized training in physiotherapy, nursing (ANM, GNM), and healthcare services. Our programs enhance healthcare accessibility in rural and urban areas while promoting health awareness and professional development.",
  },
  {
    icon: <IconSocial />,
    title: "Social Welfare Programs",
    description: "Two key initiatives: Karwaan-e-Zindagi for elderly care and Karwaan-e-Ehsaas for animal welfare. We provide shelter, healthcare, and engagement activities while contributing to ecological balance.",
  },
  {
    icon: <IconSkills />,
    title: "Skill Development",
    description: "Comprehensive training in textile production, handloom, and hand-tufted items. We provide marketing support and guidance for Self-Help Group formation and management.",
  },
  {
    icon: <IconLivelihood />,
    title: "Sustainable Livelihoods",
    description: "Empowering vulnerable groups through training in home industries, cottage industries, and Khadi village industries. Special focus on rural communities, differently-abled individuals, and women.",
  },
  {
    icon: <IconImpact />,
    title: "Social Impact Initiatives",
    description: "Active engagement in de-addiction awareness programs and environmental conservation through tree plantation initiatives. We promote healthy lifestyles and sustainable environmental practices.",
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Work & Programs</h2>
        <p className="section-subtitle">
          Empowering communities through comprehensive training, sustainable livelihoods, and social welfare initiatives. 
          Our programs are designed to create lasting impact through skill development and community engagement.
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
