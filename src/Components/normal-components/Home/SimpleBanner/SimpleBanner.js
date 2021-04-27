import React from "react";
import "./SimpleBanner.css";
export default function SimpleBanner({ title }) {
  return (
    <div className="simple-banner">
      <div className="banner-info text-center">
        <h1>{title}</h1>
        <div className="btn  px-3  btn-warning mt-2  mx-auto">
          <a href="#home-contact" className="text-dark">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
