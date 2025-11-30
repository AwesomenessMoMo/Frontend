import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clothes.css";
import clothesData from "../data/clothesdata";
import { useCart } from "../context/CartContext";

const Clothes = () => {
    const { addToCart } = useCart(); // Correct way

    const [sizeFilter, setSizeFilter] = useState("All");
    const [category, setCategory] = useState("All");
    const [sortType, setSortType] = useState("");

    const filtered = clothesData
        .filter((item) =>
            category === "All" ? true : item.category === category
        )
        .filter((item) =>
            sizeFilter === "All" ? true : item.sizes.includes(sizeFilter)
        )
        .sort((a, b) => {
            if (sortType === "low-high") return a.price - b.price;
            if (sortType === "high-low") return b.price - a.price;
            if (sortType === "az") return a.name.localeCompare(b.name);
            if (sortType === "za") return b.name.localeCompare(a.name);
            return 0;
        });

    return (
        <div className="clothes-page">

            {/* FILTER SIDEBAR */}
            <aside className="clothes-sidebar">
                <h2>Filter</h2>

                <label>Category</label>
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>All</option>
                    <option>Hoodies</option>
                    <option>T-Shirts</option>
                    <option>Shorts</option>
                </select>

                <label>Size</label>
                <select 
                    value={sizeFilter} 
                    onChange={(e) => setSizeFilter(e.target.value)}
                >
                    <option>All</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <label>Sort By</label>
                <select 
                    value={sortType} 
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="low-high">Price: Low → High</option>
                    <option value="high-low">Price: High → Low</option>
                    <option value="az">Name: A → Z</option>
                    <option value="za">Name: Z → A</option>
                </select>

                <Link to="/store" className="back-btn">← Back to Store</Link>
            </aside>

            {}
            <div className="clothes-content">
                <h1>Clothes</h1>

                <div className="clothes-grid">
                    {filtered.map((item) => (
                        <div className="clothes-card" key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <h3>{item.name}</h3>
                            <p>${item.price}</p>

                            {/* Sizes */}
                            <div className="sizes">
                                {item.sizes.map((s, i) => (
                                    <span key={i} className="size-tag">{s}</span>
                                ))}
                            </div>

                            <button
                                onClick={() =>
                                    addToCart({
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                        image: item.image,
                                        size: item.sizes[0] || null,
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Clothes;
