// src/components/About.jsx
import { motion } from 'framer-motion';
import '../styles/about.css';
// You can use an emoji as a fallback if you don't have the SVG
// import decorativeLeaf from '../assets/decorative-leaf.svg';

const About = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Karwaan-e-Swarozgar
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Empowering communities through sustainable livelihoods and social transformation
          </motion.p>
          
          <motion.div className="about-text-content" variants={itemVariants}>
            <div className="vision-mission">
              <div className="vision-block">
                <div className="icon-container">
                  {/* Use an emoji as fallback if SVG is not available */}
                  <span className="decorative-icon">🌱</span>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To empower individuals and marginalized communities by fostering self-reliance through sustainable, 
                  skill-based small-scale industries, promoting dignity, economic independence, and social inclusion.
                </p>
              </div>
              
              <div className="mission-block">
                <div className="icon-container">
                  <span className="decorative-icon">🤝</span>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To uplift economically disadvantaged individuals by providing comprehensive training in textile-related 
                  sectors, including sewing, hand-tufting, and traditional crafts. We create sustainable livelihood 
                  opportunities while promoting handmade, eco-friendly products in both local and global markets. 
                  Our goal is to build self-reliant communities where craftsmanship and creativity drive economic 
                  and social transformation.
                </p>
              </div>
            </div>
            
            <motion.div className="about-block" variants={itemVariants}>
              <h3>Future Strategic Initiatives</h3>
              <div className="initiatives-grid">
                <div className="initiative-item">
                  <h4>Social Welfare</h4>
                  <p>
                    Two key initiatives under our social welfare program:
                  </p>
                  <ul>
                    <li>
                      <strong>Karwaan-e-Zindagi:</strong> A comprehensive elderly care program providing 
                      shelter, healthcare, and engagement activities for senior citizens.
                    </li>
                    <li>
                      <strong>Karwaan-e-Ehsaas:</strong> An animal welfare initiative focused on protecting 
                      and caring for abandoned pets, contributing to ecological balance.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="btn about-cta-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(139, 90, 43, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Partner With Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
