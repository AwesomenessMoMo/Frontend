import React, { useState } from "react";
import "../styles/loginmodal.css"; // uses same styling file
import { useAuth } from "../context/AuthContext";

function SignupModal({ close, openLogin }) {
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //for backend later
        login({ name, email });

        close();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                
                <h2 className="modal-title">Sign Up</h2>

                <form onSubmit={handleSubmit} className="modal-form">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="modal-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="modal-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="modal-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="modal-btn">
                        Create Account
                    </button>
                </form>

                <p className="modal-switch">
                    Already have an account?{" "}
                    <span
                        className="modal-switch-link"
                        onClick={() => {
                            close();
                            openLogin();
                        }}
                    >
                        Login
                    </span>
                </p>

                <button className="modal-close" onClick={close}>✕</button>
            </div>
        </div>
    );
}

export default SignupModal;
