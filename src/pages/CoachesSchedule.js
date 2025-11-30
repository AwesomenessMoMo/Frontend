import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/coachesschedule.css";

const CoachesSchedule = ({ coach, image, specialty, bio }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const timeSlots = [
        "08:00 AM", "09:00 AM", "10:00 AM",
        "12:00 PM", "01:00 PM", "03:00 PM",
        "05:00 PM", "06:00 PM", "08:00 PM",
    ];

    const confirmBooking = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    return (
        <div className="inline-schedule-wrapper">
            <div className="inline-schedule-box">
                
                {/* Coach Profile */}
                <div className="coach-profile">
                    <img src={image} alt={coach} className="coach-img" />

                    <div className="coach-info">
                        <h1>{coach}</h1>
                        <h3>{specialty}</h3>
                        <p>{bio}</p>
                    </div>
                </div>

                {/* Calendar */}
                <div className="calendar-box">
                    <h2>Select a Date</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        minDate={new Date()}
                    />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                    <div className="time-section">
                        <h2>Select a Time</h2>
                        <div className="time-grid">
                            {timeSlots.map((time, i) => (
                                <button
                                    key={i}
                                    className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Confirmation */}
                {selectedDate && selectedTime && (
                    <div className="confirmation">
                        <h3>Booking Summary</h3>

                        <p>
                            <strong>{coach}</strong><br />
                            {specialty}<br /><br />
                            <strong>Date:</strong> {selectedDate.toDateString()}<br />
                            <strong>Time:</strong> {selectedTime}
                        </p>

                        <button className="confirm-btn" onClick={confirmBooking}>
                            Confirm Booking
                        </button>
                    </div>
                )}

                {/* Success Popup */}
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <h2>Success!</h2>
                            <p>Your session has been booked.</p>
                            <button onClick={() => setShowPopup(false)}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoachesSchedule;
