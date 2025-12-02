import { createContext, useContext, useState } from "react";
import { usuarios } from "../data/usuarios.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password, recordarme) => {
    const foundUser = usuarios.find(
      u => u.usuario.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );

    if (foundUser) {
      const newUser = {
        email: foundUser.usuario.toLowerCase(),
        nombre: foundUser.nombre,
        rol: foundUser.rol,
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
    return { success: true, mensaje: "Sesión cerrada correctamente" };
  };

  const register = (email, password, nombre) => {
    const existe = usuarios.find(
      u => u.usuario.toLowerCase() === email.trim().toLowerCase()
    );
    if (existe) {
      return { success: false, mensaje: "El usuario ya existe" };
    }

    const newUser = { 
      email: email.trim().toLowerCase(), 
      nombre, 
      rol: "cliente" 
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return { success: true, mensaje: `Bienvenido ${nombre}` };
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);