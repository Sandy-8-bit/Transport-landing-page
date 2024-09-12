import React from 'react';
import Image from '../image/Image';
import Service from '../service/Service';
import Faq from '../question/Ques';
import AboutSection from '../About us/About';
import Contact from '../Contact us/Contact'

const Home = () => {
  return (
    <div>
      <div id="home">
      <Image />
      </div>
     
      
      
      <div id="services">
        <Service />
      </div>
      
   
      <div id="about-us">
        <AboutSection />
      </div>
      <div id='contact-us'>
      <Contact/>
      
      </div>
      
      <Faq />
    </div>
  );
};

export default Home;
