import React, { createContext, useState, useEffect, useMemo } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const data = localStorage.getItem('carrito');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    const productoNormalizado = {
      ...producto,
      precio: Number(producto.precio), // 👈 aseguramos número
    };

    setCarrito(prev => {
      const existe = prev.find(p => p.id === productoNormalizado.id);
      if (existe) {
        return prev.map(p =>
          p.id === productoNormalizado.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...productoNormalizado, cantidad: 1 }];
    });
  };

  const eliminarProducto = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito(prev =>
      cantidad > 0
        ? prev.map(p => p.id === id ? { ...p, cantidad } : p)
        : prev.filter(p => p.id !== id)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = useMemo(
    () => carrito.reduce((acc, p) => acc + (Number(p.precio) || 0) * p.cantidad, 0),
    [carrito]
  );

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, actualizarCantidad, vaciarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
};