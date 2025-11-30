import React, { useEffect, useRef } from "react";
import "../styles/cartsidebar.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ open, close }) => {
    const { cart, addToCart, removeOne, removeAll } = useCart();
    const ref = useRef();
    const navigate = useNavigate();

    // Close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                close();
            }
        };

        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open, close]);

    return (
        <div className={`cart-overlay ${open ? "show" : ""}`}>
            <div className="cart-sidebar" ref={ref}>

                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={close}>✕</button>
                </div>

                {cart.length === 0 ? (
                    <p className="empty-msg">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item, index) => (
                                <div className="cart-item" key={index}>

                                    <img
                                        src={
                                            item.image ||
                                            (item.images && item.images[0]) ||
                                            "/fallback.png"
                                        }
                                        alt={item.name}
                                    />

                                    <div className="cart-info">
                                        <h4>{item.name}</h4>
                                        <p className="price">${item.price}</p>

                                        <div className="qty-controls">
                                            <button onClick={() => removeOne(item)}>-</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => addToCart(item)}>+</button>
                                        </div>

                                        <p className="total">
                                            Total: ${item.price * item.qty}
                                        </p>

                                        <button className="remove-all" onClick={() => removeAll(item)}>
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {}
                        {}
                        {}
                        <div className="checkout-section">
                            <button
                                className="checkout-btn"
                                onClick={() => {
                                    close();       
                                    navigate("/checkout");
                                }}
                            >
                                Proceed to Checkout →
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
