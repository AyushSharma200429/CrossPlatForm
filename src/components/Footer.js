import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="contact-details">
            <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
            <p><strong>Mobile no.:</strong> <a href="tel:+919+++++++++">+91-9+++++++++</a></p>
            <p><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Jaipur, Rajasthan, India.</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <nav>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <p>&copy; 2024 Rhyno EV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
