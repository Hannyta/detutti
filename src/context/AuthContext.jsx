import { createContext, useContext, useState } from "react";
import { usuarios } from '../data/usuarios.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password, recordarme) => {
    
    const foundUser = usuarios.find(
      u => u.usuario === email && u.password === password
    );

    if (foundUser) {
      const newUser = {
        email: foundUser.usuario,
        nombre: foundUser.nombre,
        rol: foundUser.rol
      };

      setUser(newUser);

      if (recordarme) {
        localStorage.setItem("user", JSON.stringify(newUser));
      }

      return { success: true, mensaje: `Bienvenido ${foundUser.nombre}` };
    } else {
      return { success: false, mensaje: "Usuario o contraseña incorrectos" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = (email, password, nombre) => {
    const newUser = { email, nombre, rol: "cliente" };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);