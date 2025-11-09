import React from "react";
import { Link } from "react-router-dom";
import "../styles/supplements.css";

const Supplements = () => {
    return (
        <div className="supplements">
            <h1>Welcome to the Supplements Page</h1>
            <Link to="/store">Back to Store</Link>
        </div>
    );
};

export default Supplements;
