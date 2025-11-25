import React, { useState } from "react";
import "../styles/contactus.css";

function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted!\n\nWe will get back to you shortly.");

        //clear form after submit
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for any questions, concerns, or feedback!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contactus;
