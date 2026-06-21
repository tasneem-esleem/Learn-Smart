import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Error parsing user from localStorage:", e);
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");
      }
    }
    setLoading(false);
  }, []);

  // ✅ صارت synchronous، بتحدث الـ state فوراً بدون أي طلب API تكراري
  const login = (userData, token) => {
    if (token) {
      localStorage.setItem("userToken", token);
    }
    if (userData) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    window.location.href = "/login";
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};