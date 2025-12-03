import { ProductoItem } from '../ui/ProductosLayout';
import TarjetaProducto from './TarjetaProducto';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Boton from '../ui/Boton'; 

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  // Selecciona un 30% de productos al azar para mostrar en oferta
  const productosConOferta = productos
    .map(p => p.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.ceil(productos.length * 0.3));

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
            const enOferta = productosConOferta.includes(producto.id);
            const precioOriginal = enOferta ? producto.precio : null;
            const precioConDescuento = enOferta ? producto.precio * 0.85 : producto.precio;

            return (
              <div 
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex" 
                key={producto.id}
              >
                <ProductoItem className="w-100 h-100">
                  <TarjetaProducto
                    {...producto}
                    enOferta={enOferta}
                    precioOriginal={precioOriginal}
                    precioConDescuento={precioConDescuento}
                    aplicaCuotas={producto.aplicaCuotas}
                    cuotas={producto.cuotas}
                    valorCuota={producto.valorCuota}
                    boton={
                      enCarrito ? (
                        "✅ Agregado"
                      ) : (
                        <Boton
                          onClick={() => {
                            agregarProducto({ ...producto, cantidad: 1 });
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
