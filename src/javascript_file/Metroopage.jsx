import React, { useRef } from "react";
import "../css_files/Metropage.css";
import { useEffect } from "react";

const Metroopage = () => {
  const linkref = useRef();
  const herocontentref=useRef();

  useEffect(() => {
      const observe = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const div = entry.target.querySelector("div");
  
            div.style.left = "2%";
            div.style.transition = "left 3s ease";
  
            observer.disconnect();
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: "15%",
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(observe, options);
  
      if (herocontentref.current) {
        observer.observe(herocontentref.current);
      }
  
      return () => {
        if (herocontentref.current) {
          observer.unobserve(herocontentref.current);
        }
      };
    }, []);

  return (
    <div className="metro-container">
      <nav className="navbar">
        <img
          src="/images/logoo.jpeg"
          style={{ width: "250px", height: "75px" }}
        ></img>

        <aside>
          <ul className="nav-links" ref={linkref}>
            <li>
              {" "}
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              {" "}
              <a href="#foter">Contact Us</a>
            </li>
            <li>
            <a href="#homecontainer">Servics</a>
            </li>
            <li>
              <a href="#foter">Connect Us</a>
            </li>
          </ul>
        </aside>
        <i
          class="fa-solid fa-bars-staggered"
          style={{ fontSize: "2.5rem", cursor: "pointer", display: "none" }}
          onClick={() => {
            if (linkref.current.style.display === "flex") {
              linkref.current.style.display = "none";
            } else {
              linkref.current.style.display = "flex";
            }
          }}
        ></i>
      </nav>
      <header className="hero-section" ref={herocontentref}>
        <figure>
          <img src="/images/gl.jpeg" />

          <div className="hero-content">
            <h1>Easy Global Connect</h1>
            <h3>Bridging Borders, Building Futures</h3>
            <blockquote>
              <p>
                At Easy Global Connect, our vision is to revolutionize global
                trade by crafting a seamless, sustainable, and customer-centric
                ecosystem. We envision system where every transaction not only
                connects buyers and suppliers but also consistently exceeds
                customer expectations, fostering long-term relationships built
                on trust, quality, and mutual growth. Through our relentless
                pursuit of excellence and customer satisfaction
              </p>
            </blockquote>
          </div>
        </figure>
      </header>
    </div>
  );
};

export default Metroopage;
