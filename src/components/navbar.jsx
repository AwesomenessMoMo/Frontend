import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import searchData from "../data/Searchdata";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import CartSidebar from "./CartSidebar";

function Navbar(props) {
   const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(results);
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    const first = suggestions[0];
    if (first) navigate(first.path);
    setQuery("");
    setSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const selectSuggestion = (item) => {
    navigate(item.path);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <>
      <nav className={"navbar " + (props.openMenu ? "expand" : "")}>
        <div className="logo">
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
            value={query}
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
          <SearchIcon className="search-icon" onClick={handleSearch} />

          {suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => selectSuggestion(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NAV LINKS */}
        <div className={"nav-links " + (props.openMenu ? "opened" : "closed")}>
          <Link to="/store">Store</Link>
          <Link to="/training-programs">Training Programs</Link>

          {/* AUTH TEXT LINKS */}
          {!user ? (
            <>
              <span
                className="nav-text-link"
                onClick={() => setShowLogin(true)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              <span className="nav-user">Hello, {user.name}</span>
              <span className="nav-text-link" onClick={logout}>
                Logout
              </span>
            </>
          )}

          {/* CART */}
          <span
            className="nav-text-link"
            onClick={() => setOpenCart(true)}
          >
            🛒 Cart ({cart.length})
          </span>
        </div>

        <button className="mobile-menu-icon" onClick={props.toggleMenu}>
          <ReorderIcon />
        </button>
      </nav>

      {/* MODALS + CART SIDEBAR */}
      {showSignup && (
        <SignupModal
          close={() => setShowSignup(false)}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
      {showLogin && (
        <LoginModal
          close={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      <CartSidebar open={openCart} close={() => setOpenCart(false)} />
    </>
  );
}

export default Navbar;
