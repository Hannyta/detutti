import { ProductosContainer, ProductoItem, PrecioActual, PrecioOriginal } from "./ui/ProductosLayout";
import TarjetaProducto from "./TarjetaProducto";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { formatearPrecio } from "../helpers/formatearPrecio";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  // Seleccionamos aleatoriamente algunos productos para aplicar el 15% de descuento
  const productosConOferta = productos
    .map(p => p.id) // tomamos los IDs
    .sort(() => 0.5 - Math.random()) // mezclamos aleatoriamente
    .slice(0, Math.ceil(productos.length * 0.3)); // 30% de los productos en oferta

  return (
    <>
      {/* SEO con React Helmet */}
      <Helmet>
        <title>Detutti - Productos</title>
        <meta name="description" content="Explora nuestra selección de productos premium en Detutti" />
      </Helmet>

      {/* Bootstrap Grid + styled-components */}
      <div className="container">
        <div className="row">
          <ProductosContainer>
            {productos.map(producto => {
              const enCarrito = carrito.find(p => p.id === producto.id);

              // Verificamos si este producto está en oferta
              const enOferta = productosConOferta.includes(producto.id);
              const precioOriginal = enOferta ? producto.precio : null;
              const precioConDescuento = enOferta ? producto.precio * 0.85 : producto.precio;

              return (
                <div className="col-md-4 col-sm-6" key={producto.id}>
                  <ProductoItem>
                    <TarjetaProducto
                      {...producto}
                      precio={
                        <>
                          {enOferta && (
                            <PrecioOriginal>{formatearPrecio(precioOriginal)}</PrecioOriginal>
                          )}
                          <PrecioActual>{formatearPrecio(precioConDescuento)}</PrecioActual>
                        </>
                      }
                      boton={
                        enCarrito ? (
                          "✅ Agregado"
                        ) : (
                          <button
                            aria-label={`Agregar ${producto.nombre} al carrito`} // ARIA
                            onClick={() => {
                              agregarProducto({ ...producto, cantidad: 1 });
                              toast.success(`${producto.nombre} agregado al carrito!`); // Toastify
                            }}
                          >
                            <FaShoppingCart /> Agregar al carrito
                          </button>
                        )
                      }
                    />
                  </ProductoItem>
                </div>
              );
            })}
          </ProductosContainer>
        </div>
      </div>
    </>
  );
};

export default Productos;