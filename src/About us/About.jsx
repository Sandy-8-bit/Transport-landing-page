import React from 'react';
import './About.css'; // assuming you're using a separate CSS file
import car from "./Men next to a vehicle involved in freight transportation.svg"
const AboutSection = () => {
  return (
    <div className="app-about-container">
      <div className="top-abt">
      <h1>
    <span style={{ color: '#8A3026',marginRight: '8px' }}>About</span>
    <span style={{ color: '#000' }}>Us</span>
    </h1>

      </div>
      <div className="bottom-abt">
      <div className="app-about-image">
        <img src={car} alt="Car" className="app-car-image" />
      </div>
      <div className="app-about-content">
        
        <h2 className="app-company-overview">Our Company Overview</h2>
        <p className="app-about-text">
          Welcome to Eintransport! We are a trusted and reliable packing and moving service dedicated to making your relocation experience smooth and hassle-free. Whether you're moving across the street or across the states, our team of experienced professionals is here to handle all your packing, loading, transporting, and unloading needs with care and precision. At the heart of our business is a commitment to customer satisfaction. We pride ourselves on our professionalism, reliability, and the personal touch we bring to every move. Our goal is to make your transition to your new location as smooth as possible, with minimal disruption to your routine.
        </p>
      </div>
      </div>

    </div>
  );
};

export default AboutSection;
