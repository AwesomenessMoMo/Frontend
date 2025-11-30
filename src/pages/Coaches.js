import React, { useState } from "react";
import "../styles/coaches.css";
import coach1 from "../assets/coaches/abou_ali.png";
import coach2 from "../assets/coaches/serana.png";
import coach3 from "../assets/coaches/jad_swift.png";
import CoachesSchedule from "./CoachesSchedule";

const Coaches = () => {
    const [selectedCoach, setSelectedCoach] = useState(null);

    const coaches = [
        {
            name: "Coach Abou Ali",
            image: coach1,
            specialty: "Strength & Conditioning Expert",
            bio: "Abou Ali is a strength powerhouse with 12+ years of coaching experience. He specializes in explosive training, progressive overload, and building raw strength."
        },
        {
            name: "Coach Serana",
            image: coach2,
            specialty: "Weight Loss Specialist",
            bio: "Serana is known for her friendly approach and effective fat-burning programs. She focuses on sustainable weight loss, nutrition planning, and motivation coaching."
        },
        {
            name: "Coach Jad Swift",
            image: coach3,
            specialty: "Hypertrophy & Bodybuilding",
            bio: "Jad Swift specializes in muscle hypertrophy, aesthetic shape building, and bodybuilding structure programs."
        }
    ];

    const handleCoachClick = (c) => {
        if (selectedCoach && selectedCoach.name === c.name) {
            setSelectedCoach(null);
        } else {
            setSelectedCoach(c);
        }
    };

    return (
        <>
            {}
            <div className="coaches-hero">
                <h1>OUR COACHES</h1>
                <p>Our team of certified professionals is ready to guide your fitness journey.</p>
            </div>

            {}
            <div className="coaches-section">
                {coaches.map((c, i) => (
                    <div
                        key={i}
                        className={`coach-card ${selectedCoach?.name === c.name ? "active" : ""}`}
                        onClick={() => handleCoachClick(c)}
                    >
                        <img src={c.image} alt={c.name} />
                        <h3>{c.name}</h3>
                        <p>{c.specialty}</p>
                    </div>
                ))}
            </div>

            {}
            {selectedCoach && (
                <CoachesSchedule
                    coach={selectedCoach.name}
                    image={selectedCoach.image}
                    specialty={selectedCoach.specialty}
                    bio={selectedCoach.bio}
                />
            )}
        </>
    );
};

export default Coaches;
