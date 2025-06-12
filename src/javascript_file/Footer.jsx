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
            Companies Registered office:<br></br> F 803 ERR, Kashid Park,<br></br> Pimple Gurav, Pune 411 061. <br></br>
            Maharashtra. India.
          </p>
        </blockquote>
        
        <blockquote>
          <h3>Contact US</h3>
          <p>
            {" "}
            <i class="fa-solid fa-phone fa-lg " style={{color:"gray"}}></i> Cell : +91-99229 25855
          </p>
          <p>
            {" "}
            <img src="/images/gmail.png" style={{height:"1.2rem"}}></img> Email :
            Easyglobalconnects@gmail.com
          </p>
          <p>
            <a
              href="https://wa.me/9199229 25855?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
              className="mail"
            >
              {" "}
              <i class="fa-brands fa-square-whatsapp fa-xl" style={{color: "#07b023"}}></i> WHATSAPP : Connect Us
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
              <i class="fa-brands fa-linkedin " style={{color:"skyblue"}}></i>Easy  GLOBAL CONNECT LINKEDIN.com
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGlixWY3dMXThJmE1UEhK9YZpMhXRZ5_te73YjLJ2zNXPm0A/viewform?usp=header" className="mail">
              {" "}
              <i class="fa-solid fa-circle-user"></i> Enquire Now{" "}
            </a>
          </p>
        </blockquote>

       
      </footer>
      
   
    </div>
   
    </>
  );
}

export default Footer;
