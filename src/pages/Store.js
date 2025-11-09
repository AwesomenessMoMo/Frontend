import React from "react";
import { Link } from "react-router-dom";
import '../styles/store.css';
import supplementImage from '../assets/supplements.png';
import clothesImage from '../assets/clothes.png';
import { useNavigate } from "react-router-dom";

function Store() {
    const navigate = useNavigate();
    return (
        <div className="store-container">
            <div
                className="store-item"
                aria-label="Go to Supplements"
                onClick={() => navigate('/Supplements')}
            >
                <img src={supplementImage} alt="Supplements" className="store-image sup-image" />
            </div>

            <div
                className="store-item"
                aria-label="Go to Clothes"
                onClick={() => navigate('/Clothes')}
            >
                <img src={clothesImage} alt="Clothes" className="store-image clo-image" />
            </div>
        </div>
    );
}

export default Store;