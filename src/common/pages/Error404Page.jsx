import React from "react";
import "../../style/Error404.css";
import error from "../../assets/svg/error404.svg";

export default function Error404Page() {
  return (
    <div className="error-container">
      <img
        className="error-svg"
        src={error}
        alt="Page Not Found SVG"
      />
      {/* <div className="error-section">
        <h1 className="error-title">ERROR 404: PAGE NOT FOUND</h1>
        <h4 className="error-message">Oops! It seemed like you got lost</h4>
      </div> */}
    </div>
  );
}
