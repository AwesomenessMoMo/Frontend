import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from "react";

function Navbar(props) {


  // const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenMenu(openMenu ? false : true);


  return (
    <>
      <nav className={"navbar " + (props.openMenu ? "expand" : "")}>
        <div classname="logo"></div>
        <div className={"nav-links " + (props.openMenu ? "opened" : "closed")}>
          <button className="close-menu-icon" onClick={props.toggleMenu}>
          </button>
          <Link to="/store">Store</Link>
          <Link to="/Coaches">Coaches</Link>
        </div>
        <button className="mobile-menu-icon" onClick={props.toggleMenu}>
          <ReorderIcon />
        </button>
      </nav>
    </>
  );
}

export default Navbar;