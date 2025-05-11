// src/components/Contact.jsx
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Google Form submission URL - replace YOUR_FORM_ID with your actual Google Form ID
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfLaWlWGSnIbKMLiBx-oZOaud380NXZLrYcdCi88MOVct74UQ/formResponse';
    
    // Create form data to send
    const formDataToSend = new URLSearchParams();
    
    // Map your form fields to Google Form entry IDs
    // Replace these entry IDs with your actual Google Form field entry IDs
    formDataToSend.append('entry.1442243625', formData.name);
    formDataToSend.append('entry.1609125281', formData.email);
    formDataToSend.append('entry.498798679', formData.subject);
    formDataToSend.append('entry.1874431418', formData.message);

    // Send the form data to Google Forms
    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors', // Important for cross-origin requests to Google Forms
      body: formDataToSend
    })
    .then(() => {
      // Since mode is 'no-cors', we won't get a normal response
      // We just assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          We'd love to hear from you! Whether you have a question, want to partner, or get involved, please reach out.
        </p>
        <div className="contact-content-wrapper">
          <div className="contact-form-container">
            {submitStatus === 'success' ? (
              <div className="form-success-message">
                <h3>Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you soon.</p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSubmitStatus(null)}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="6" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                {submitStatus === 'error' && (
                  <div className="form-error-message">
                    There was an error submitting the form. Please try again later.
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn btn-form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          <div className="contact-info-container">
            <h3>Contact Information</h3>
            <p>
              Reach out to us directly or visit our office. We are always open to discussions about collaborations and support.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address:</strong>
                  <p>Prafulla Plaza, Makhania Kuan, Patna, Bihar, 800004, India</p>
                </div>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <p><a href="mailto:contact@karwaanes.org">contact@karwaanes.org</a></p>
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone:</strong>
                  <p><a href="tel:+917086846283">+91 7086 846 283</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
