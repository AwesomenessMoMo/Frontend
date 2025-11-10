import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section */}
            <div className="home">
                <h1>Welcome to Bi To Tri Gym</h1>
                <p>
                    Transform your strength, endurance, and mindset with our professional
                    coaches and personalized training plans.
                </p>
                <button onClick={() => navigate("/Subplans")}>Subscribe Now</button>
            </div >

            {/* About Us Section */}
            < div className="about-section" >
                <h2>About Us</h2>
                <p>
                    At <strong>Bi To Tri Gym</strong>, we believe in building strength —
                    not only in body, but in spirit and discipline. Our mission is to help
                    every member reach their full potential through a combination of
                    modern training techniques, expert guidance, and a motivating
                    community.
                </p>
                <p>
                    From personalized coaching to state-of-the-art equipment, our gym is
                    designed to give you everything you need to perform your best and
                    transform your life, where you could also buy and try!
                </p>
            </div >
        </>
    );
};

export default Home;
