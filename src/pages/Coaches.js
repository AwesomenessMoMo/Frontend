import React from "react";
import "../styles/coaches.css";
import coach1 from "../assets/coaches/abou_ali.png";
import coach2 from "../assets/coaches/serana.png";
import coach3 from "../assets/coaches/jad_swift.png";
import { useNavigate } from "react-router-dom";

const Coaches = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* HERO SECTION */}
            <div className="coaches-hero">
                <h1>OUR COACHES</h1>
                <p>
                    Our team of certified professionals is dedicated to guiding you every step of
                    your fitness journey. Each coach brings unique expertise, proven experience,
                    and a passion for helping you become the strongest version of yourself.
                </p>

            </div>

            {/* COACHES SECTION */}
            <div className="coaches-section">
                <div className="coach-card" onClick={() => navigate("/training")}>
                    <img src={coach1} alt="Abou Ali" />
                    <h3>Coach Abou Ali</h3>
                    <p>Strength & Conditioning Expert</p>
                </div>

                <div className="coach-card" onClick={() => navigate("/training")}>
                    <img src={coach2} alt="Serana" />
                    <h3>Coach Serana</h3>
                    <p>Weight Loss Specialist</p>
                </div>

                <div className="coach-card" onClick={() => navigate("/training")}>
                    <img src={coach3} alt="Jad Swift" />
                    <h3>Coach Jad Swift</h3>
                    <p>Hypertrophy & Bodybuilding</p>
                </div>
            </div>
        </>
    );
};

export default Coaches;
