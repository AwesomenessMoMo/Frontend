import React, { useState } from "react";
import "../styles/training.css";
import { useNavigate } from "react-router-dom";

const TrainingProgram = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const programs = [
        { title: "🏁 Beginner Full-Body Program", short: "Perfect for newcomers learning the basics.", details: "Light weights, form training, mobility sessions, and gradual strength progression." },
        { title: "🔥 Weight Loss / Fat Burn Program", short: "High-intensity calorie-burning routine.", details: "HIIT, circuits, fat-burn cardio, and metabolic conditioning sessions." },
        { title: "💪 Muscle Gain (Hypertrophy)", short: "Maximize muscle growth and strength.", details: "High-volume workouts, progressive overload, and targeted muscle isolation." },
        { title: "🏋️ Strength Training (Power)", short: "Focused on heavy compound lifting.", details: "5×5 training, low reps, heavy weights, and explosive movements." },
        { title: "⚡ Athlete Conditioning Program", short: "Speed, agility, explosiveness.", details: "Plyometrics, sprints, agility drills, and performance-based conditioning." },
        { title: "🏆 5-Day Bodybuilding Split", short: "Classic physique-building training.", details: "Body-part split with maximum volume and muscle isolation." },
    ];

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setShowModal(true);
    };

    const chooseYes = () => {
        setShowModal(false);
        navigate("/coaches");
    };

    const chooseNo = () => {
        setShowModal(false);
        navigate("/home");
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="program-container">
                <h1 className="program-title">Training Programs</h1>
                <p className="program-intro">Hover to preview detailed program information.</p>

                {programs.map((p, index) => (
                    <div
                        key={index}
                        className="program-card hoverable clickable"
                        onClick={() => handleProgramClick(p)}
                    >
                        <h2>{p.title}</h2>
                        <p className="program-desc">{p.short}</p>

                        <div className="hover-details">
                            <p>{p.details}</p>
                            <span className="hover-tip">Click to continue →</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <h3>Do you want a coach for this program?</h3>
                        <p>Click anywhere outside the box to continue browsing</p>
                        <div className="modal-buttons">
                            <button className="yes-btn" onClick={chooseYes}>Yes</button>
                            <button className="no-btn" onClick={chooseNo}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TrainingProgram;
