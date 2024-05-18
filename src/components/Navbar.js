import React from 'react';
import { Link } from 'react-scroll';
import LogoImage from '../images/3.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="/" className="logo-link"><Link to ="home"></Link><img src={LogoImage} alt="FixThis Logo" className="logo-image" /> {/* Your logo image */}
      </a>
      </div>
      <ul className="navbar-menu">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
       
        <li><Link to="contact" smooth={true} duration={500}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
