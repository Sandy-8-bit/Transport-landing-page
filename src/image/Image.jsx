import React, { useState } from 'react';
import "./image.css";
import hand from "./black hand.svg";
import truck from "./blacktruck.svg";
import ins from "./blacksecurity.svg";

const Image = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const getCardClassName = (index) => {
    return activeCard === index ? "app-card-itemactive" : "app-card-item";
  };

  const getIcon = (index, defaultIcon, activeIcon) => {
    return activeCard === index ? activeIcon : defaultIcon;
  };

  return (
    <>
      <div className="app-whole-image">
        <div className="app-first-image-cont">
          <div className="app-first-image-child1">
            <div className="app-child1">
              <h2>Digital Platform For Transportation</h2>
            </div>
            <div className="app-first-image-child2">
            <h4><span>We are in</span> Tamil Nadu, Kerala, and Karnataka</h4>
          </div>
            <div className="app-child2">
              <div className="app-grand-child1">
                <p>We are specialize in packing, loading, transporting, and unloading your belongings safely and efficiently</p>
              </div>
              <div className="app-grand-child-2">
                <p>Real-time shipment |Transport Management|Svstems (TMS)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="app-button-image">
          <button>Download Now</button>
        </div>
        <div className="app-second-image-cont">
        <div
  className={getCardClassName(1)}

>
  <img src={getIcon(1, hand)} alt="hand" />
  <p className="highlight-text">
    Over a <span className="highlight">thousand</span> transportation providers
  </p>
</div>

<div
  className={getCardClassName(2)}

>
  <img src={getIcon(2, truck)} alt="truck" />
  <p>
    <span className="highlight">Safe</span> and <span className="highlight">reliable</span> transport services
  </p>
</div>

<div
  className={getCardClassName(3)}

>
  <img src={ins} alt="insurance" />
  <p>
    Comprehensive <span className="highlight">insurance</span> coverage
  </p>
</div>

        </div>
      </div>
    </>
  );
}

export default Image;
