import React from 'react';
import '../css/Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to our Terms of Service. These terms outline the rules and regulations for the use of our website and services.
        </p>
      </section>
      <section className="user-accounts">
        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account and for all activities that occur under your account.
        </p>
      </section>
      <section className="prohibited-activities">
        <h2>Prohibited Activities</h2>
        <p>
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul>
          <li>Copying or distributing any part of our website without our prior written authorization</li>
          <li>Using our website for any unauthorized or illegal purpose</li>
          <li>Interfering with or disrupting the integrity or performance of our website</li>
        </ul>
      </section>
      <section className="termination">
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these terms.
        </p>
      </section>
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
        Email: <a href="mailto:info@rhyno.in">info@rhyno.in</a><br />
        Address: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
        </p>
      </section>
    </div>
  );
};

export default Terms;
