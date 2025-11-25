import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import searchData from "../data/Searchdata";

function Navbar(props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    // Filter matches
    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(results);
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    // Navigate to first match or results page
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

        {/* DROPDOWN SUGGESTIONS */}
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

      <div className={"nav-links " + (props.openMenu ? "opened" : "closed")}>
        <Link to="/store">Store</Link>
        <Link to="/training-programs">Training Programs</Link>
        <Link to="/contact-us">Contact us</Link>
      </div>

      <button className="mobile-menu-icon" onClick={props.toggleMenu}>
        <ReorderIcon />
      </button>
    </nav>
  );
}

export default Navbar;
