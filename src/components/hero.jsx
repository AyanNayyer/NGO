// src/components/Hero.jsx
import { motion } from "framer-motion";
import '../styles/hero.css';

const Hero = () => {
  // Variants for container animation - faster animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Reduced from 0.3
        delayChildren: 0.1    // Reduced from 0.2
      }
    }
  };

  // Variants for title animation with enhanced glow effect
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6, // Reduced from 0.8
        ease: "easeOut"
      }
    }
  };

  // Variants for text reveal animation - faster
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut"
      }
    }
  };

  // Split subtitle text into words for word-by-word animation
  const subtitleText = "Dedicated to fostering sustainable livelihoods and economic independence through Khadi & Village Industries, skill development, and community support.";
  const subtitleWords = subtitleText.split(" ");

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content-container flex items-center justify-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content max-w-4xl mx-auto">
          <motion.h1 
            className="hero-title font-extrabold"
            variants={titleVariants}
          >
            <motion.span 
              className="main-title font-black"
              variants={titleVariants}
            >
              Karwaan-e-Swarojgaar
            </motion.span>
            <motion.span 
              className="highlight font-black"
              variants={titleVariants}
            >
              Empowering Futures,
            </motion.span>
            <motion.span 
              className="hero-title-second-highlight font-black"
              variants={titleVariants}
            >
              Weaving Self-Reliance
            </motion.span>
          </motion.h1>

          <motion.div className="hero-subtitle">
            {subtitleWords.map((word, index) => (
              <motion.span
                key={index}
                className="subtitle-word inline-block mr-1.5" // Added margin-right and inline-block
                variants={textVariants}
                // Faster word-by-word animation
                transition={{ delay: 0.5 + index * 0.02 }} // Reduced delay from 1.0 to 0.5 and interval from 0.03 to 0.02
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="hero-buttons"
            variants={textVariants}
            transition={{ delay: 1.2 }} // Reduced from 2.0
          >
            <motion.a 
              href="#about" 
              className="btn"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#5C3A21",
                boxShadow: "0 0 15px rgba(139, 90, 43, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Mission
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#c8a770",
                boxShadow: "0 0 15px rgba(200, 167, 112, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
