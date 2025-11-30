import React from 'react';
import '../styles/subplans.css';
import { useNavigate } from "react-router-dom";

function Subplans() {
    const navigate = useNavigate();

    // Send user to checkout with selected plan
    const goToCheckout = (planName, price) => {
        navigate("/checkout", {
            state: {
                plan: planName,
                price: price,
            },
        });
    };

    return (
        <div className="subplans-container">
            <div className="subplans-header">
                <h1>Choose Your Perfect Plan</h1>
                <p>
                    Select the subscription plan that best fits your fitness goals and lifestyle.
                    Enjoy exclusive benefits and stay committed to your health journey!
                </p>
            </div>

            {/* ===== MONTHLY PLANS ===== */}
            <h2 className="plan-section-title">Monthly Plans</h2>
            <div className="subplans-grid">
                <div className="subplan-item basic-plan">
                    <h2>Basic Plan</h2>
                    <p>$30/month</p>
                    <ul>
                        <li>Access to basic workout routines</li>
                        <li>Monthly progress tracking</li>
                        <li>Email support</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Basic Monthly Plan", 30)}
                    >
                        Subscribe Now
                    </button>
                </div>

                <div className="subplan-item premium-plan">
                    <h2>Premium Plan</h2>
                    <p>$60/month</p>
                    <ul>
                        <li>All Basic Plan features</li>
                        <li>Personalized workout plans</li>
                        <li>Nutrition guidance</li>
                        <li>Priority support</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Premium Monthly Plan", 60)}
                    >
                        Subscribe Now
                    </button>
                </div>

                <div className="subplan-item elite-plan">
                    <h2>Elite Plan</h2>
                    <p>$80/month</p>
                    <ul>
                        <li>All Premium Plan features</li>
                        <li>1-on-1 coaching sessions</li>
                        <li>Advanced performance analytics</li>
                        <li>Exclusive access to events</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Elite Monthly Plan", 80)}
                    >
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* ===== ANNUAL PLANS ===== */}
            <h2 className="plan-section-title">Annual Plans</h2>
            <div className="subplans-grid">
                <div className="subplan-item basic-plan">
                    <h2>Basic Plan</h2>
                    <p>$360/year</p>
                    <ul>
                        <li>All monthly features</li>
                        <li>Save 2 months compared to monthly billing</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Basic Annual Plan", 360)}
                    >
                        Subscribe Annually
                    </button>
                </div>

                <div className="subplan-item premium-plan">
                    <h2>Premium Plan</h2>
                    <p>$576/year <span className="subplan-savings">(Save 20%)</span></p>
                    <ul>
                        <li>All monthly features</li>
                        <li>Personalized workouts + Nutrition</li>
                        <li>Exclusive premium support</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Premium Annual Plan", 576)}
                    >
                        Subscribe Annually
                    </button>
                </div>

                <div className="subplan-item elite-plan">
                    <h2>Elite Plan</h2>
                    <p>$720/year <span className="subplan-savings">(Save 25%)</span></p>
                    <ul>
                        <li>All monthly features</li>
                        <li>1-on-1 coaching sessions</li>
                        <li>Exclusive access to gym events</li>
                    </ul>
                    <button
                        className="subscribe-button"
                        onClick={() => goToCheckout("Elite Annual Plan", 720)}
                    >
                        Subscribe Annually
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Subplans;
