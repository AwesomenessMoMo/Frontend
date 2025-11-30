import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.name === item.name);

            if (existing) {
                return prev.map((p) =>
                    p.name === item.name ? { ...p, qty: p.qty + 1 } : p
                );
            } else {
                return [...prev, { ...item, qty: 1 }];
            }
        });
    };

    const removeOne = (item) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.name === item.name);

            if (existing.qty === 1) {
                return prev.filter((p) => p.name !== item.name);
            }
            return prev.map((p) =>
                p.name === item.name ? { ...p, qty: p.qty - 1 } : p
            );
        });
    };

    const removeAll = (item) => {
        setCart((prev) => prev.filter((p) => p.name !== item.name));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeOne, removeAll }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
