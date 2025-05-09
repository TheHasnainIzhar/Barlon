"use client"

import "../styles/pages/home.page.css";
import "../styles/color-plates/color-plate.css";
import "../styles/fonts/fonts.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-showcase-slider">
        <div className="home-slides-container">
          <div className="showcase-slide home-slide-1">
            <div className="slide-content">
              <h1>52% Rival Discount</h1>
            </div>
          </div>
          <div className="showcase-slide home-slide-2">
            <div className="slide-content">
              <h1>52% Rival Discount</h1>
            </div>
          </div>
          <div className="showcase-slide home-slide-3">
            <div className="slide-content">
              <h1>52% Rival Discount</h1>
            </div>
          </div>
          <div className="showcase-slide home-flex">
            <div className="home-heading">Elevate Your Wardrobe with Timeless Elegance</div>
            <div className="home-text">
              Welcome to Barlon, Your ultimate destination for stylish, high-quality clothing that fits every mood and moment. Whether {"you're looking for everyday essentials, bold statement pieces, or the latest fashion trends, we've got you covered"}
            </div>
            <div className="shop-button">
              <p>Shop Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
