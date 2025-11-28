import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  // Inicializamos el carrito leyendo de localStorage
  const [carrito, setCarrito] = useState(() => {
    const data = localStorage.getItem('carrito');
    return data ? JSON.parse(data) : [];
  });

  // Guardamos el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // ➕ Agregar producto
  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  // ➖ Eliminar producto
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔄 Actualizar cantidad
  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad } : p
      )
    );
  };

  // 🧹 Vaciar carrito
  const vaciarCarrito = () => setCarrito([]);

  // 💰 Calcular total
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, actualizarCantidad, vaciarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
};