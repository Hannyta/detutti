import { ProductosContainer, ProductoItem, PrecioActual, PrecioOriginal } from "./ui/ProductosLayout";
import TarjetaProducto from "./TarjetaProducto";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { formatearPrecio } from "../helpers/formatearPrecio";

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProductosContainer>
      {productos.map(producto => {
        const enCarrito = carrito.find(p => p.id === producto.id);
        return (
          <ProductoItem key={producto.id}>
            <TarjetaProducto
              {...producto}
              precio={<PrecioActual>{formatearPrecio(producto.precio)}</PrecioActual>}
              boton={enCarrito ? "✅ Agregado" : "Agregar al carrito 🛒"}
              onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
            />
          </ProductoItem>
        );
      })}
    </ProductosContainer>
  );
};

export default Productos;