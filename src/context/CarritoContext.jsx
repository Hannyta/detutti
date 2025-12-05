import React, { createContext, useState, useEffect, useMemo } from 'react';
import { mapProductoToProps } from '../helpers/mapProductoToProps';

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
    if (carrito.length > 0) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      localStorage.removeItem('carrito');
    }
  }, [carrito]);

  // 🔹 Agregar producto con normalización de cuotas y descuentos
  const agregarProducto = (producto, productosConOferta = []) => {
    const productoNormalizado = mapProductoToProps(producto, productosConOferta);

    setCarrito(prev => {
      const existe = prev.find(p => p.id === productoNormalizado.id);
      if (existe) {
        return prev.map(p =>
          p.id === productoNormalizado.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }
      return [...prev, { ...productoNormalizado, cantidad: 1 }];
    });
  };

  const eliminarProducto = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    if (cantidad > 99) cantidad = 99;
    setCarrito(prev =>
      prev.map(p => p.id === id ? { ...p, cantidad } : p)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  // 🔹 Total con descuento aplicado si corresponde
  const total = useMemo(
    () => carrito.reduce((acc, p) => {
      const precioFinal = p.enOferta ? p.precioConDescuento : p.precio;
      return acc + (precioFinal || 0) * p.cantidad;
    }, 0),
    [carrito]
  );

  const totalFormateado = useMemo(
    () => total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }),
    [total]
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        actualizarCantidad,
        vaciarCarrito,
        total,
        totalFormateado
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
