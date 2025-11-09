import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import '../styles/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-links">
                { }
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to={"facebook"}><FacebookIcon /></Link>
                <Link to={"instagram"}><InstagramIcon /></Link>
            </div>
            © 2025 Bi To Tri Gym. All rights reserved.
        </footer>
    </>
}

export default Footer;