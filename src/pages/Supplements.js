import React, { useState } from "react";
import "../styles/supplements.css";
import { Link } from "react-router-dom";
import supplementsData from "../data/supplementsData";

const Supplements = () => {
    const [sortType, setSortType] = useState("");
    const [category, setCategory] = useState("All");

    /* --- FILTER + SORT LOGIC --- */
    const filtered = supplementsData
        .filter((p) => (category === "All" ? true : p.category === category))
        .sort((a, b) => {
            if (sortType === "low-high") return a.price - b.price;
            if (sortType === "high-low") return b.price - a.price;
            if (sortType === "az") return a.name.localeCompare(b.name);
            if (sortType === "za") return b.name.localeCompare(a.name);
            return 0;
        });

    return (
        <div className="supplements-page">

            {/* ===== LEFT SIDE FILTERS ===== */}
            <aside className="filter-sidebar">
                <h2>Filter</h2>

                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>All</option>
                    <option>Amino Acid</option>
                    <option>Creatine</option>
                    <option>Whey Protein</option>
                </select>

                <label>Sort By</label>
                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="">None</option>
                    <option value="low-high">Price: Low → High</option>
                    <option value="high-low">Price: High → Low</option>
                    <option value="az">Name: A → Z</option>
                    <option value="za">Name: Z → A</option>
                </select>

                <Link to="/store" className="back-btn">← Back to Store</Link>
            </aside>

            {/* ===== RIGHT SIDE PRODUCTS ===== */}
            <div className="supplements-content">
                <h1>Supplements</h1>

                <div className="products-grid">
                    {filtered.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img
                                src={item.images[0]} 
                                alt={item.name}
                                className="product-img"
                            />

                            <h3>{item.name}</h3>
                            <p>${item.price}</p>

                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Supplements;
