import React from "react";
import { Link } from "react-router-dom";
import "../styles/clothes.css";
const Clothes = () => {
    return (
        <>
        <div className="clothes">
            <h1>Welcome to the Clothes Page</h1>
            <Link to="/Store">Back to Store</Link>
        </div>
        </>
    )
}
export default Clothes;