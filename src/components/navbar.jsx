import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";


function Navbar(props) {
  return (
    <nav className={"navbar " + (props.openMenu ? "expand" : "")}>
      <div className="logo">
        { }
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <SearchIcon className="search-icon" />
      </div>
      <div className={"nav-links " + (props.openMenu ? "opened" : "closed")}>
        <button className="close-menu-icon" onClick={props.toggleMenu}></button>
        <Link to="/store">Store</Link>
        <Link to="/coaches">Coaches</Link>
      </div>

      <button className="mobile-menu-icon" onClick={props.toggleMenu}>
        <ReorderIcon />
      </button>
    </nav>
  );
}

export default Navbar;
