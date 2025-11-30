import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* LEFT COLUMN — ABOUT */}
        <div className="footer-about">
          <img src={logo} alt="Logo" className="logo-img-footer" />
          <p>
            Bi To Tri Gym is dedicated to strength, performance, and overall wellness.
            Our supplements, equipment, and coaching programs are trusted by athletes
            and tested for top-quality performance.
          </p>

          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>

        {/* COLUMN 2 — SHOP */}
        <div className="footer-col">
          <h3>SHOP</h3>
          <Link to="/supplements">Supplements</Link>
          <Link to="/clothes">Clothes</Link>
        </div>

        {/* COLUMN 3 — CATEGORIES */}
        {/* COLUMN 3 — CATEGORIES */}
        <div className="footer-col">
          <h3>CATEGORIES</h3>
          <Link to="/supplements?category=whey">Whey Protein</Link>
          <Link to="/supplements?category=amino">Amino Acid</Link>
          <Link to="/supplements?category=creatine">Creatine</Link>
          <Link to="/supplements">View All</Link>
        </div>

        {/* COLUMN 4 — SUPPORT */}
        <div className="footer-col">
          <h3>SUPPORT</h3>
          <Link to="/coaches">Coaching</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Bi To Tri Gym. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;