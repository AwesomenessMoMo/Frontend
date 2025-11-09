import React from "react";
import "../styles/coaches.css";
import { Link } from "react-router-dom";

const Coaches = () => {
    return (
        <div className="coaches">
            <h1>Welcome to the Coaches Page</h1>
            <p>
                Meet our certified fitness professionals who are passionate about helping you
                achieve your goals. Each coach brings unique expertise in strength training,
                nutrition, and performance improvement — dedicated to guiding you every step
                of the way.
            </p>
            <Link to="/">Back home</Link>
        </div>
    );
};

export default Coaches;
