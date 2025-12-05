import { useEffect, useState, useContext } from 'react';
import { ProductoItem } from '../ui/ProductosLayout';
import TarjetaProducto from './TarjetaProducto';
import { CarritoContext } from '../context/CarritoContext';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Boton from '../ui/Boton';
import { mapProductoToProps } from '../helpers/mapProductoToProps';

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const [productosConOferta, setProductosConOferta] = useState([]);

  useEffect(() => {
    // 1. Leer de localStorage
    const guardados = JSON.parse(localStorage.getItem("productosConOferta"));
    if (guardados && guardados.length > 0) {
      setProductosConOferta(guardados);
    } else {
      // 2. Generar aleatorio solo la primera vez
      const seleccionAleatoria = productos
        .map(p => p.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.ceil(productos.length * 0.3));

      setProductosConOferta(seleccionAleatoria);
      localStorage.setItem("productosConOferta", JSON.stringify(seleccionAleatoria));
    }
  }, [productos]);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Helmet>
        <title>Detutti - Productos</title>
        <meta 
          name="description" 
          content="Explora nuestra selección de productos premium en Detutti" 
        />
      </Helmet>

      <div className="container-fluid">
        <div className="row g-2">
          {productos.map(producto => {
            const enCarrito = carrito.find(p => p.id === producto.id);
            const productoProps = mapProductoToProps(producto, productosConOferta);

            return (
              <div 
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex" 
                key={producto.id}
              >
                <ProductoItem className="w-100 h-100">
                  <TarjetaProducto
                    {...productoProps}
                    boton={
                      enCarrito ? (
                        "✅ Agregado"
                      ) : (
                        <Boton
                          onClick={() => {
                            // 🔹 Normalizamos el producto con oferta antes de agregarlo
                            const productoNormalizado = mapProductoToProps(producto, productosConOferta);
                            agregarProducto(productoNormalizado, productosConOferta);

                            toast.success(`${producto.nombre} agregado al carrito!`, {
                              position: "bottom-right",
                              autoClose: 2000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: false,
                              draggable: false,
                              style: { 
                                backgroundColor: "#209ce4", 
                                color: "#fff", 
                                fontWeight: 600 
                              }
                            });
                          }}
                          aria-label={`Agregar ${producto.nombre} al carrito`}
                        >
                          <FaShoppingCart size={16} />
                          <span>Agregar al carrito</span>
                        </Boton>
                      )
                    }
                  />
                </ProductoItem>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Productos;