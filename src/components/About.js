import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="history">
        <h2>Our History</h2>
        <p>
        Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
        </p>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
        With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
        </p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Continuously pushing the boundaries of technology and design.</li>
          <li><strong>Sustainability:</strong> Committed to reducing environmental impact through eco-friendly practices.</li>
          <li><strong>Customer Focus:</strong> Prioritizing customer satisfaction and delivering exceptional service.</li>
          <li><strong>Integrity:</strong> Upholding the highest standards of honesty and transparency.</li>
        </ul>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <div className="team-info">
            <h3>Ayush Sharma</h3>
            <p>Founder & CEO</p>
            <p>Ayush leads our team with a vision for a sustainable future and a passion for innovation in the EV industry.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <div className="team-info">
            <h3>Vedang Sharma</h3>
            <p>Chief Technology Officer</p>
            <p>Vedang drives our technological advancements, ensuring our vehicles remain at the cutting edge of performance and efficiency.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
