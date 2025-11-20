import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, recordarme) => {
    setUser({ email });
    if (recordarme) {
      localStorage.setItem("userEmail", email);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userEmail");
  };

  
  const register = (email, password, nombre) => {
  
    setUser({ email, nombre });
    console.log("Usuario registrado:", { email, nombre });
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);