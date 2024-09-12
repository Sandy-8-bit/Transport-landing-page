import React from 'react';
import "./service.css";
import loc from "./busloc.svg";
import packet from "./updated.svg";
import vector from "./Vector.svg";

const Service = () => {
  return (
    <div>
      <div className="whole-service">
        <div className="head-service">
          <h4><span>Service</span> We Provide</h4>
        </div>
        <div className="body-service">
          <div className="body1-service">
             <div className="img-service">
               <img src={packet} alt='free'/>
             </div>
             <div className="bg-bg">
               <img src={vector} alt='bg'/>
             </div>
             <div className="h-tag">
               <h5>PACKING & MOVING</h5>
             </div>
             <div className="content-service">
               <ul>
                 <li>Quick packing solutions for all household goods</li>
                 <li>We use high-quality materials and techniques to securely pack your items, ensuring they arrive in perfect condition</li>
                 <li>Professional moving services to ensure safe transportation</li>
               </ul>
             </div>
          </div>
          <div className="body1-service">
            <div className="img-service">
              <img src={loc} alt='free'/>
            </div>
            <div className="bg-bg">
              <img src={vector} alt='bg'/>
            </div>
            <div className="h-tag">
              <h5>TRANSPORTATION</h5>
            </div>
            <div className="content-service">
              <ul>
                <li>Quick packing solutions for all household goods</li>
                <li>We use high-quality materials and techniques to securely pack your items, ensuring they arrive in perfect condition</li>
                <li>Professional moving services to ensure safe transportation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
