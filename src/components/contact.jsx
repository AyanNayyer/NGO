// src/components/Contact.jsx
import React, { useState } from 'react';
//import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API or email service)
    console.log("Form data submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          {/* Placeholder for subtitle */}
          We'd love to hear from you! Whether you have a question, want to partner, or get involved, please reach out.
        </p>
        <div className="contact-content-wrapper">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-form-submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info-container">
            <h3>Contact Information</h3>
            <p>
              Reach out to us directly or visit our office. We are always open to discussions about collaborations and support.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-icon">📍</span> {/* Placeholder Icon */}
                <div>
                  <strong>Address:</strong>
                  <p>[Your NGO's Full Address], [City], [State], [PIN Code], India</p> {/* Replace with actual address from your doc if available */}
                </div>
              </li>
              <li>
                <span className="contact-icon">📧</span> {/* Placeholder Icon */}
                 <div>
                  <strong>Email:</strong>
                  <p><a href="mailto:info@karwaaneswarojgaar.org">info@karwaaneswarojgaar.org</a></p> {/* Replace with actual email */}
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span> {/* Placeholder Icon */}
                <div>
                  <strong>Phone:</strong>
                  <p><a href="tel:+910000000000">+91 XXXX XXX XXX</a></p> {/* Replace with actual phone */}
                </div>
              </li>
            </ul>
            {/* Optional: Embedded Map */}
            {/* <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." // Replace with your Google Maps embed link
                width="100%" 
                height="250" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Our Location">
              </iframe>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
