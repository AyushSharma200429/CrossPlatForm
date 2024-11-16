import React from 'react';
import '../css/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to our Privacy Policy. Your privacy is critically important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </section>
      <section className="information-collection">
        <h2>Information We Collect</h2>
        <p>
          We collect various types of information in connection with your use of our services, including:
        </p>
        <ul>
          <li>Personal Identification Information (name, email address, etc.)</li>
          <li>Usage Data (how you use our website or app)</li>
          <li>Cookies and Tracking Technologies (to enhance your experience)</li>
        </ul>
      </section>
      <section className="usage">
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To improve our website and user experience</li>
          <li>To communicate with you, including sending updates and promotional materials</li>
          <li>To analyze usage trends and enhance our services</li>
        </ul>
      </section>
      <section className="data-security">
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no system can be completely secure, so we cannot guarantee absolute security.
        </p>
      </section>
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:info@rhyno.in">info@rhyno.in</a><br />
          Address: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
