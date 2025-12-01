import { useState, useEffect, createContext, useContext } from 'react';
import { manejarError } from '../helpers/manejarError'; 
import calcularCuotas from '../helpers/calcularCuotas';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [loadingAgregar, setLoadingAgregar] = useState(false);
  const [loadingEditar, setLoadingEditar] = useState(false);
  const [loadingEliminar, setLoadingEliminar] = useState(false);

  const API = "https://68e037b793207c4b4793fe2f.mockapi.io/productos";

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      setError(null);

      const respuesta = await fetch(API);
      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      const datos = await respuesta.json();

      const productosConCuotas = datos.map(p => calcularCuotas({
        ...p,
        precio: Number(p.precio) // 👈 aseguramos número
      }));

      setProductos(productosConCuotas);

    } catch (error) {
      manejarError(error, "Error al cargar los productos", setError);
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      setLoadingAgregar(true);
      setError(null);

      const respuesta = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      const nuevoProducto = await respuesta.json();

      const productoConCuotas = calcularCuotas({
        ...nuevoProducto,
        precio: Number(nuevoProducto.precio)
      });

      setProductos(prev => [...prev, productoConCuotas]);

      return productoConCuotas;

    } catch (error) {
      manejarError(error, "Hubo un problema al agregar el producto.", setError);
      return null;
    } finally {
      setLoadingAgregar(false);
    }
  };

  const editarProducto = async (producto) => {
    try {
      setLoadingEditar(true);
      setError(null);

      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      const productoActualizado = await respuesta.json();

      const productoConCuotas = calcularCuotas({
        ...productoActualizado,
        precio: Number(productoActualizado.precio)
      });

      setProductos(prev =>
        prev.map(p => p.id === productoConCuotas.id ? productoConCuotas : p)
      );

      return productoConCuotas;

    } catch (error) {
      manejarError(error, "Hubo un problema al editar el producto.", setError);
      return null;
    } finally {
      setLoadingEditar(false);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      setLoadingEliminar(true);
      setError(null);
      const respuesta = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!respuesta.ok) throw new Error("Error al eliminar");
      setProductos(prev => prev.filter(p => p.id !== id));
      return true;
    } catch (error) {
      manejarError(error, "Hubo un problema al eliminar el producto.", setError);
      return false;
    } finally {
      setLoadingEliminar(false);
    }
  };

  return (
    <ProductosContext.Provider value={{
      productos,
      cargando,
      error,
      loadingAgregar,
      loadingEditar,
      loadingEliminar,
      cargarProductos,
      agregarProducto,
      editarProducto,
      eliminarProducto
    }}>
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductosContext);
