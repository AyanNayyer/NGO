// src/components/About.jsx
//import '../styles/About.css';
// Add a relevant image for the about section in src/assets/
// e.g., src/assets/about-us-community.jpg
// import aboutImage from '../assets/about-us-community.jpg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Karwaan-e-Swarojgaar</h2>
        <p className="section-subtitle">
          {/* Extract this from your document (WhatsApp-Image-2025-05-07-at-20.34.23.jpg) */}
          A brief introduction about the organization's establishment, core philosophy, and journey. 
          This section should reflect the information provided in your NGO's official documents.
        </p>
        
        <div className="about-content">
          <div className="about-image-container">
            {/* <img src={aboutImage} alt="Community members benefiting from Karwaan-e-Swarojgaar programs" /> */}
            <img src="https://via.placeholder.com/500x400.png?text=Our+Community+Work" alt="Placeholder for community work" />
          </div>
          
          <div className="about-text-content">
            <div className="about-block">
              <h3>Our Story & Mission</h3>
              <p>
                {/* Placeholder: Populate with content from your document */}
                Karwaan-e-Swarojgaar was founded with the vision to [mention founding vision from document]. 
                Our mission is to empower individuals and communities, particularly [mention target groups like women, artisans from document], 
                by providing them with skills, resources, and opportunities for self-employment and sustainable livelihoods, focusing on Khadi and traditional village industries.
              </p>
            </div>
            
            <div className="about-block">
              <h3>Our Approach</h3>
              <p>
                {/* Placeholder: Populate with content from your document */}
                We believe in a holistic approach that includes [mention key activities like training, resource mobilization, market linkage from document]. 
                Our efforts are guided by the principles of [mention core principles like self-reliance, community participation from document].
                The organization strives to ensure profits from these activities are reinvested into achieving its objectives for the members, as outlined in point (11) of your document.
              </p>
            </div>

             <div className="about-key-points">
                <h4>Key Objectives (from your document):</h4>
                <ul>
                  {/* These should be based on points like (10), (13), (14), (15) from your document */}
                  <li><i className="icon-leaf"></i>Establishment and promotion of Khadi & Village Industries (Point 10).</li>
                  <li><i className="icon-users"></i>Comprehensive development of artisans, especially women, and marginalized groups (Point 10).</li>
                  <li><i className="icon-tools"></i>Production and wholesale/retail of Khadi products (cotton, silk, wool) and training (Point 13).</li>
                  <li><i className="icon-link"></i>Training weavers in silk, cotton, and wool, and arranging modern equipment (Point 14).</li>
                  <li><i className="icon-growth"></i>Providing employment through Khadi and Village Industries Board schemes (Point 15).</li>
                </ul>
            </div>
            
            <a href="#contact" className="btn about-cta-btn">Learn More & Partner</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
