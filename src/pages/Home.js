import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {}
            <div className="home fade-in">
                <h1 className="animate-title">Welcome to Bi To Tri Gym</h1>
                <p className="animate-text">
                    Transform your strength, endurance, and mindset with our professional coaches
                    and personalized training plans.
                </p>
                <button className="animate-button" onClick={() => navigate("/Subplans")}>
                    Subscribe Now
                </button>
            </div>

            {}
            <div className="about-section slide-up">
                <h2>About Us</h2>
                <p>
                    At <strong>Bi To Tri Gym</strong>, we believe in building strength — not only
                    in body, but in spirit and discipline. Our certified trainers and modern
                    programs are designed to help you grow at your own pace.
                </p>
                <p>
                    Whether you're a beginner or an advanced athlete, our community-focused
                    environment ensures you stay motivated, supported, and guided throughout your
                    fitness journey.
                </p>
                <p>
                    From personalized coaching to premium supplements and professional-grade
                    equipment, our gym brings everything you need under one roof — train, shop, and
                    transform your lifestyle.
                </p>
            </div>

            {}
            <div className="why-section fade-in">
                <h2>Why Choose Bi To Tri Gym?</h2>
                <div className="why-grid">
                    <div className="why-card" onClick={() => navigate("/coaches")}>
                        <h3>🏋️‍♂️ Expert Coaches</h3>
                        <p>Train with certified professionals who create tailored workout plans.</p>
                    </div>

                    <div className="why-card" onClick={() => navigate("/training-programs")}>
                        <h3>💪 Personalized Programs</h3>
                        <p>Achieve your goals faster with structured training and tracking.</p>
                    </div>

                    <div className="why-card" onClick={() => navigate("/store")}>
                        <h3>🛒 In-Gym Store</h3>
                        <p>Buy supplements, gear, and apparel directly from our online shop.</p>
                    </div>
                </div>
            </div>
                   <div className="testimonial-section">
                <h2>Member Transformations</h2>

                <div className="testimonial-slider">
                    <div className="testimonial">
                        <p>"I lost 12kg in 8 weeks. Best gym ever!"</p>
                        <h4>- Karim</h4>
                    </div>

                    <div className="testimonial">
                        <p>"Amazing coaches and perfect training program."</p>
                        <h4>- Rami</h4>
                    </div>

                    <div className="testimonial">
                        <p>"Bi To Tri changed my entire lifestyle."</p>
                        <h4>- Maya</h4>
                    </div>
                </div>
            </div>


            {}
            <div className="cta-section slide-up">
                <h2>Ready to Start Your Transformation?</h2>
                <p>Join hundreds of members who changed their lives at Bi To Tri Gym.</p>
                <button
                    onClick={() => {
                        navigate("/Subplans");
                        window.scrollTo(0, 0);
                    }}
                >
                    View Subscription Plans
                </button>
            </div>
        </>
    );
};

export default Home;
