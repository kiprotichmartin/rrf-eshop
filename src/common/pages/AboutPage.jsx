import React from "react";
import "../../style/AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-section-title">
          <h2 className="about-title">About Us</h2>
        </div>

        <div className="about-section-body">
          <p className="about-content">
            <h4 className="about-title">Our Purpose</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            asperiores optio aut veniam iusto quia, cum libero reiciendis autem
            harum ratione. Minima doloremque natus numquam quis esse sed
            architecto aspernatur.
          </p>
          <p className="about-content">
            <h4 className="about-title">Vision Statement</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            asperiores optio aut veniam iusto quia, cum libero reiciendis autem
            harum ratione. Minima doloremque natus numquam quis esse sed
            architecto aspernatur.
          </p>
          <p className="about-content">
            <h4 className="about-title">My Personal Statement</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            asperiores optio aut veniam iusto quia, cum libero reiciendis autem
            harum ratione. Minima doloremque natus numquam quis esse sed
            architecto aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
}
