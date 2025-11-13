import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import '../styles/footer.css';
import Social from "./social";

function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-links">
                { }
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Social></Social>
            </div>
            © 2025 Bi To Tri Gym. All rights reserved.
        </footer>
    </>
}

export default Footer;