import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Inicializar usuario desde localStorage si ya estaba guardado
    const email = localStorage.getItem("userEmail");
    const nombre = localStorage.getItem("userNombre");
    return email && nombre ? { email, nombre } : null;
  });

  const login = (email, recordarme) => {
    // Recuperar nombre guardado
    let nombre = localStorage.getItem("userNombre");

    // Caso especial: usuario demo
    if (email === "test@demo.com") {
      nombre = "Usuario Demo";
    }

    setUser({ email, nombre });

    if (recordarme) {
      localStorage.setItem("userEmail", email);
      if (nombre) localStorage.setItem("userNombre", nombre);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userNombre");
  };

  const register = (email, password, nombre) => {
    setUser({ email, nombre });
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userNombre", nombre);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);