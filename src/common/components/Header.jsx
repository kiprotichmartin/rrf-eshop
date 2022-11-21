import React from "react";
import { Link } from "react-router-dom";
import "../../style/Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-section-title">
        <Link to="/">
          <h2 className="header-title">ESHOP</h2>
        </Link>
      </div>

      <nav className="header-section-links">
        <Link className="nav-link" to="home">
          Home
        </Link>
        <Link className="nav-link" to="about">
          About
        </Link>
        <Link className="nav-link" to="contact">
          Contact
        </Link>
      </nav>

      <div className="header-section-actions">
        <button className="header-btn btn-add-product">Add Product</button>
        <button className="header-btn btn-logout">Logout</button>
      </div>
    </div>
  );
}
