import React, { useState , useEffect} from 'react'
import { createContext } from 'react-router-dom';

export const UserContext = createContext();

export default function UserProvider({children}) {
 const [user, setUser] = useState(null);
 useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  // دالة لتسجيل الدخول وحفظ البيانات
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // دالة لتسجيل الخروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
   <UserContext.Provider value={{user , login , logout}}>
    {children}
   </UserContext.Provider>
  )
}
