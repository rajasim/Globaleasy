import React, { useEffect } from "react";
import "../css_files/Footer.css";

function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
    <div className="footer" id="foter">
      <footer>
        <blockquote>
          <h3>Products and Support</h3>
          <p>
            {" "}
            - Engineering Rubber & Polymer, EV &<br></br>Electronics Components
          </p>
          <p>- Dried & Process Food / Root Products</p>
          <p>- Woven and Knitted Fabric Products</p>
          <p>- ISO Certifications and Business Excellence</p>
        </blockquote>
        
        <blockquote>
          <h3>Company Information</h3>
          <p>
            <br></br>
            Companies Registered office:<br></br> F 803 ERR, Kashid Park,<br></br> Pimle
            Gurav, Pune 411 061. MH. India
          </p>
        </blockquote>
        
        <blockquote>
          <h3>Contact US</h3>
          <p>
            {" "}
            <i class="fa-solid fa-phone fa-lg " style={{color:"gray"}}></i> Cell : +91-9922 925 855
          </p>
          <p>
            {" "}
            <img src="/images/gmail.png" style={{height:"1.2rem"}}></img> Email :
            easyglobalconnects@gmail.com
          </p>
          <p>
            <a
              href="https://wa.me/919922925855?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
              className="mail"
            >
              {" "}
              <i class="fa-brands fa-square-whatsapp " style={{color: "#07b023"}}></i> WHATSAPP : Connect Us
            </a>{" "}
          </p>
        </blockquote>
         
        <blockquote>
        <h3>Connect US</h3>
          

          
          <p>
            <a
              href="https://www.linkedin.com/company/106591839/admin/dashboard/"
              className="mail"
            >
              {" "}
              <i class="fa-brands fa-linkedin " style={{color:"skyblue"}}></i> EASY GLOBAL LINKEDIN.com
            </a>
          </p>

          <p>
            <a
              href="https://www.indiamart.com/company/16770388/"
              className="mail"
            >
              {" "}
              <i class="fa-solid fa-window-restore "></i> India Mart
            </a>
          </p>

          <p>
            <a href="https://forms.gle/a8n7uWEz8mVpnSfQ8" className="mail">
              {" "}
              <i class="fa-solid fa-circle-user"></i> Enquire Now{" "}
            </a>
          </p>
        </blockquote>

       
      </footer>
      
   
    </div>
    <div className="footerdown">
      © 2024 <span className="highlight">Easy Global Connect  </span> | All Rights Reserved. | Made By  ABM Group
    </div>
    </>
  );
}

export default Footer;
