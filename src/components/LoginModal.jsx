import React, { useState } from "react";
import "../styles/loginmodal.css";
import { useAuth } from "../context/AuthContext";

function LoginModal({ close, openSignup }) {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name: email.split("@")[0], email });
        close();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">

                <h2 className="modal-title">Login</h2>

                <form onSubmit={handleSubmit} className="modal-form">

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
                        Login
                    </button>
                </form>

                <p className="modal-switch">
                    Don’t have an account?{" "}
                    <span className="modal-switch-link"
                        onClick={() => {
                            close();
                            openSignup();
                        }}
                    >
                        Sign Up
                    </span>
                </p>

                <button className="modal-close" onClick={close}>✕</button>
            </div>
        </div>
    );
}

export default LoginModal;
