import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";
import logo from "./logs.svg";
import phonelogo from "./phone logo.svg"


const Nav = () => {
  const [activeSection, setActiveSection] = useState('home'); // Default active section
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');  // Ensure we're on the home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -50; // 10px offset from the top
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // Delay ensures the page navigates to home before scrolling
     setActiveSection(sectionId); // Set the active section to highlight
  };

  return (
    <>
      <div className="whole-nav">
        <div className="logo-nav">
          <img src={logo} alt="logo" />
        </div>
        <div className="phonelogo">
        <img src={phonelogo} alt="logo" />
        </div>
        <div className="right-side-nav">
          <ul>
          <li
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
              style={{ cursor: 'pointer' }}
            >
              Home
            </li>
            <li
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => scrollToSection('services')}
              style={{ cursor: 'pointer' }}
            >
              Services
            </li>
            <li
              className={activeSection === 'about-us' ? 'active' : ''}
              onClick={() => scrollToSection('about-us')}
              style={{ cursor: 'pointer' }}
            >
              About Us
            </li>
            <li
              className={activeSection === 'contact-us' ? 'active' : ''}
              onClick={() => scrollToSection('contact-us')}
              style={{ cursor: 'pointer' }}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
