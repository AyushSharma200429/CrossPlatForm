import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file
import logo from '../images/bg.png'; // Import the logo image

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">Products</Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li><Link to="/products">Compare All</Link></li>
              <li><Link to="/product/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/product/se03">SE03</Link></li>
              <li><Link to="/product/se03-max">SE03 Max</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
