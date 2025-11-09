import React from "react";
import "../styles/store.css";
import supplementImage from "../assets/supplements-bg.png";
import clothesImage from "../assets/clothes-bg.png";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();

  return (
    <div className="store-container">
      {/* ✨ Add title and intro text */}
      <div className="store-header">
        <h1>Fuel Your Fitness Journey</h1>
        <p>
          Explore our premium gym products — from high-quality supplements that
          power your workouts to stylish activewear built for performance and
          comfort.
        </p>
      </div>

      {/* Product sections */}
      <div className="store-grid">
        <div
          className="store-item"
          aria-label="Go to Supplements"
          onClick={() => navigate("/Supplements")}
        >
          <img
            src={supplementImage}
            alt="Supplements"
            className="store-image sup-image"
          />
        </div>

        <div
          className="store-item"
          aria-label="Go to Clothes"
          onClick={() => navigate("/Clothes")}
        >
          <img
            src={clothesImage}
            alt="Clothes"
            className="store-image clo-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
