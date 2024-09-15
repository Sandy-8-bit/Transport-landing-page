import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Footer.css";
import logo from "./Eintransport-png.png";
import group from "./insta.svg";
import group2 from "./twitter.svg";
import group3 from "./facebook.svg";
import vector from "./br-phone.svg";
import vector2 from "./br-mail.svg";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/"); // Ensure we're on the home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -50; // 10px offset from the top
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); // Delay ensures the page navigates to home before scrolling
  };

  return (
    <div className="app-footer">
      <div className="app-footer-div1">
        <div className="one-footer">
          <img src={logo} alt="logo" />
        </div>
        <div className="two-footer">
          <p>
            {" "}
            Welcome to Eintransport! We are a trusted and reliable packing and
            moving service dedicated to making your relocation experience smooth
            and hassle-free.
          </p>
        </div>
        <div className="three-footer">
          <a
            href="https://www.instagram.com/eintransport?igsh=MWdnZ29sb3dhb2J5Yw=="
            target="_blank"
          >
            <img src={group} alt="img" />
          </a>

          <a
            href="https://x.com/eintranspo92563?t=OKi5L5XsKMl_OAF2-s4Ftw&s=09"
            target="_blank"
          >
            <img src={group2} alt="img" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565764442291&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={group3} alt="img" />
          </a>
        </div>
        <div className="four-footer">
          <p>Copyright @2024</p>
        </div>
      </div>
      <div className="app-footer-div2">
        <div className="heading-foot">
          <h5>MAY WE HELP YOU?</h5>
        </div>
        <div className="heading-foo-res">
          <h5>Quick links</h5>
        </div>
        <div className="link-footer">
          <p
            onClick={() => scrollToSection("services")}
            style={{ cursor: "pointer" }}
          >
            Services
          </p>
          <p
            onClick={() => scrollToSection("about-us")}
            style={{ cursor: "pointer" }}
          >
            About Us
          </p>
          <p
            onClick={() => scrollToSection("contact-us")}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </p>
          <p>Shipping</p>
        </div>
      </div>
      <div className="app-footer-div3">
        <div className="short-div-footer">
          <div className="heading-footer-3">
            <h5>CUSTOMER SUPPORT</h5>
          </div>
          <div className="phone-footer">
            <img src={vector} alt="img" />
            <div className="phone-num">
              <p>9489847336 , 9626731203</p>
            </div>
          </div>
          <div className="mail-footer">
            <img src={vector2} alt="img" />
            <div className="phone-num">
              <a
                href="mailto:eintransport.service@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>eintransport.service@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="para-res">
            <p>
              {" "}
              Welcome to Eintransport! We are a trusted and reliable packing and
              moving service dedicated to making your relocation experience
              smooth and hassle-free.
            </p>
          </div>
          <div className="three-footer-res">
            <a
              href="https://www.instagram.com/eintransport?igsh=MWdnZ29sb3dhb2J5Yw=="
              target="_blank"
            >
              <img src={group} alt="img" />
            </a>

            <a
              href="https://x.com/eintranspo92563?t=OKi5L5XsKMl_OAF2-s4Ftw&s=09"
              target="_blank"
            >
              <img src={group2} alt="img" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565764442291&mibextid=ZbWKwL"
              target="_blank"
            >
              <img src={group3} alt="img" />
            </a>
          </div>
          <div className="four-footers">
            <p>Copyright @2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
