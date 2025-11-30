import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const signup = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
    };

    const login = (email, password) => {
        const saved = JSON.parse(localStorage.getItem("user"));
        if (!saved) return false;
        if (saved.email === email && saved.password === password) {
            setUser(saved);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
