import React from "react";
import "../css_files/Card.css";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const nav = useNavigate();
  return (
    <div className="home-container" id="homecontainer">
      <h2 className="goal-text">
      We are passionate about bridging the gap between international
              buyers and Indian suppliers. Our journey began with a simple yet
              powerful idea : To make global trade easier, more reliable, and
              sustainable.
      </h2>
      <div className="content">
        <div
          className="card"
          onClick={() => {
            nav("/rubbercard");
          }}
          id="rubbercard"
        >
          <img src="/images/pol.jpeg"></img>
          <div className="text-section">
            <h3>Engineering Rubber & Polymer Products</h3>
            <p>
              Precision Engineered Products for Strength, Durability &
              Performance
            </p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            nav("/deired");
          }}
          id="deired"
        >
          <img src="/images/food.jpeg"></img>
          <div className="text-section">
            <h3>Dried & Processed Food / Root products</h3>
            <p>Premium Dried & Processed Foods for a Healthier Tomorrow</p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            nav("/woven");
          }}
          id="woven"
        >
          <img src="/images/wove.jpeg"></img>
          <div className="text-section">
            <h3>Woven and Knitted Fabric Products</h3>
            <p>Precision-Crafted Fabrics for Comfort, Style, and Durability</p>
          </div>
        </div>
        <div
          className="card"
          onClick={() => {
            nav("/services");
          }}
          id="services"
        >
          <img src="/images/iso.jpeg"></img>
          <div className="text-section">
            <h3>ISO Certifications & Business Excellence</h3>
            <p>Setting Global Standards, Achieving Business Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
