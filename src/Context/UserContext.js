import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api'; 

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

  const login = async (userData, token) => {
    if (token) {
      localStorage.setItem("userToken", token); 
    }

    try {
      const res = await api.get("/auth/me"); 
      const freshUser = res.data?.data?.user || userData;
      setUser(freshUser);
      localStorage.setItem("user", JSON.stringify(freshUser));
    } catch {
      setUser(userData);
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
      }
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