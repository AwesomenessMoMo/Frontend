import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
    const { cart } = useCart();
    const location = useLocation();

    // If user came from Subscriptions page
    const selectedPlan = location.state?.plan || null;
    const selectedPrice = location.state?.price || 0;

    // Payment fields
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");

    // Totals
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const planTotal = Number(selectedPrice);
    const grandTotal = cartTotal + planTotal;

    const handlePayment = () => {
        if (!name || !cardNumber || !expiry || !cvc) {
            alert("Please fill all payment fields.");
            return;
        }
        alert("Processing Mastercard payment...");
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-container">

                {/* =======================
                    ORDER SUMMARY
                ======================== */}
                <div className="order-summary">
                    <h2>Order Summary</h2>

                    {/* Subscription Plan */}
                    {selectedPlan && (
                        <div className="checkout-item">
                            <p>{selectedPlan}</p>
                            <span>${planTotal}</span>
                        </div>
                    )}

                    {/* Cart Items */}
                    {cart.map((item, i) => (
                        <div key={i} className="checkout-item">
                            <p>{item.name} x {item.qty}</p>
                            <span>${item.price * item.qty}</span>
                        </div>
                    ))}

                    {/* Combined Total */}
                    <h3 className="total">Total: ${grandTotal}</h3>
                </div>

                {/* =======================
                    PAYMENT METHOD
                ======================== */}
                <div className="payment-section">
                    <h2>Payment Method</h2>

                    {/* Name */}
                    <label className="pay-label">Cardholder Name</label>
                    <input
                        type="text"
                        className="pay-input"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* Card Number */}
                    <label className="pay-label">Card Number</label>
                    <div className="card-input-wrapper">
                        <input
                            type="text"
                            className="pay-input"
                            maxLength={19}
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={(e) => {
                                const clean = e.target.value.replace(/\D/g, "");
                                setCardNumber(clean.replace(/(.{4})/g, "$1 ").trim());
                            }}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                            className="card-logo"
                            alt="mastercard"
                        />
                    </div>

                    {/* Expiry & CVC */}
                    <div className="pay-row">
                        <div className="pay-col">
                            <label className="pay-label">Expiry</label>
                            <input
                                type="text"
                                className="pay-input"
                                maxLength={5}
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={(e) => {
                                    let v = e.target.value.replace(/\D/g, "");
                                    if (v.length >= 3) v = v.replace(/(\d{2})/, "$1/");
                                    setExpiry(v);
                                }}
                            />
                        </div>

                        <div className="pay-col">
                            <label className="pay-label">CVC</label>
                            <input
                                type="password"
                                className="pay-input"
                                maxLength={3}
                                placeholder="123"
                                value={cvc}
                                onChange={(e) => {
                                    setCvc(e.target.value.replace(/\D/g, ""));
                                }}
                            />
                        </div>
                    </div>

                    {/* Pay Button */}
                    <button className="pay-btn" onClick={handlePayment}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
