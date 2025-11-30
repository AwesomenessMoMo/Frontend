import React, { useState } from "react";
import "../styles/training.css";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const TrainingProgram = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const programs = [
        { title: "🏁 Beginner Full-Body Program", short: "Perfect for newcomers learning the basics.", details: "Light weights, form training, mobility sessions, and gradual strength progression." },
        { title: "🔥 Weight Loss / Fat Burn Program", short: "High-intensity calorie-burning routine.", details: "HIIT, circuits, fat-burn cardio, and metabolic conditioning sessions." },
        { title: "💪 Muscle Gain (Hypertrophy)", short: "Maximize muscle growth and strength.", details: "High-volume workouts, progressive overload, and targeted muscle isolation." },
        { title: "🏋️ Strength Training (Power)", short: "Focused on heavy compound lifting.", details: "5×5 strength training, low reps, heavy weight, and progressive overload." },
        { title: "⚡ Athlete Conditioning Program", short: "Speed, agility, explosiveness.", details: "Plyometrics, sprints, explosive movements, and high-performance conditioning." },
        { title: "🏆 5-Day Bodybuilding Split", short: "Classic physique-building training.", details: "Body-part splits, high volume, and maximum muscle isolation." },
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

        if (selectedProgram) {
            const doc = new jsPDF("p", "mm", "a4");

            const logo = new Image();
            logo.src = require("../assets/logo.png");

            logo.onload = () => {
                doc.addImage(logo, "PNG", 80, 10, 50, 50);
                generatePDFContent(doc);
            };

            logo.onerror = () => {
                console.warn("Logo failed to load. PDF will be generated without logo.");
                generatePDFContent(doc);
            };
        }

        setTimeout(() => navigate("/home"), 300);
    };

    //-------------------------------------------------------
    // MAIN PDF CONTENT
    //-------------------------------------------------------
    const generatePDFContent = (doc) => {
        let y = 70;

        // HEADER
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text(selectedProgram.title, 80, y, { align: "center" });
        y += 15;

        // SUMMARY
        doc.setFontSize(14);
        doc.text("Program Summary:", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(selectedProgram.short, 170), 20, y);
        y += 20;

        // DETAILS
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Details:", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(selectedProgram.details, 170), 20, y);
        y += 25;

    
        const weeks = [
            { week: "Week 1", focus: "Foundation & Technique", notes: "Learn movements, establish routine." },
            { week: "Week 2", focus: "Intensity Increase", notes: "Increase weights by 5–10%." },
            { week: "Week 3", focus: "Volume Boost", notes: "Add 1 extra set to each exercise." },
            { week: "Week 4", focus: "Challenge Week", notes: "Push to your limits safely." },
        ];

        const trainingDays = [
            { day: "Day 1", focus: "Upper Body Strength", exercises: ["Bench Press 4×8", "Rows 4×10", "Shoulder Press 3×8", "Bicep Curls 3×12"] },
            { day: "Day 2", focus: "Lower Body Power", exercises: ["Squats 4×8", "Deadlift 3×5", "Lunges 3×12", "Calf Raises 3×15"] },
            { day: "Day 3", focus: "Push Day", exercises: ["Incline Bench 4×10", "Dips 3×12", "Triceps Pushdowns 3×15"] },
            { day: "Day 4", focus: "Pull Day", exercises: ["Pull-Ups 3×8", "Barbell Rows 4×10", "Face Pulls 3×15"] },
            { day: "Day 5", focus: "Full Body Conditioning", exercises: ["Burpees 3×20", "Kettlebell Swings 4×15", "Sled Push 4×20m", "Core Circuit (3 rounds)"] },
        ];

        weeks.forEach((w) => {
            if (y > 230) {
                doc.addPage();
                y = 20;
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text(w.week, 20, y);
            y += 8;

            doc.setFontSize(13);
            doc.text(`Focus: ${w.focus}`, 20, y);
            y += 6;

            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            doc.text(`Notes: ${w.notes}`, 20, y);
            y += 10;

  
            trainingDays.forEach((d) => {
                if (y > 255) {
                    doc.addPage();
                    y = 20;
                }

                doc.setFont("helvetica", "bold");
                doc.setFontSize(12);
                doc.text(`${d.day}: ${d.focus}`, 20, y);
                y += 6;

                doc.setFont("helvetica", "normal");
                d.exercises.forEach((ex) => {
                    doc.text(`• ${ex}`, 26, y);
                    y += 5;
                });

                y += 5;
            });

            y += 10;
        });

        // FOOTER
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.text("Generated by Bi To Tri Gym — Train Hard, Transform Harder.", 105, 290, { align: "center" });

        const safeTitle = selectedProgram.title.replace(/[^a-z0-9]/gi, "_");
        doc.save(`${safeTitle}_4-week-plan.pdf`);
    };

    const closeModal = () => setShowModal(false);

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

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <h3>Do you want a coach for this program?</h3>
                        <p>Click outside to cancel</p>
                        <p>pressing no will download a PDF of the chosen program</p>

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
