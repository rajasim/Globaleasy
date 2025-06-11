import React from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Toy = () => {
  const nav = useNavigate();
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);

  return (
    <div className="contentent">
      <div className="box">
        <h2 className="offer"> Magnetic STEM Toy Set </h2>
        <img src="/images/WhatsApp Image 2025-06-04 at 8.44.23 PM.jpeg" alt="Gift Card" className="image" />
        <p className="text"> Unleash the Power of Play with Our 36-Pieces Magnetic STEM Toy Sets </p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://www.amazon.in/dp/B0F8BNVQCF";
          }}
        >
          Enquire Now
        </button>
      </div>
      </div>
  );
};
export default Toy;