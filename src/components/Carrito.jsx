import Boton from './Boton';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './Carrito.module.css';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext'; 
import { formatearPrecio } from '../helpers/formatearPrecio'; // 👈 importamos helper

const Carrito = ({ onClose }) => {
  const { carrito: productos, vaciarCarrito, eliminarProducto, actualizarCantidad } = useContext(CarritoContext);
  const { isAuthenticated } = useAuthContext(); 
  const navigate = useNavigate();

  const total = productos.reduce(
    (acc, producto) => acc + (Number(producto.precio) || 0) * producto.cantidad,
    0
  );

  const handleCompra = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para realizar la compra.');
      navigate('/login');
      onClose?.(); // 👈 cerramos aside si redirige a login
      return;
    }
    if (confirm('¿Confirma esta compra?')) {
      navigate('/compra', { state: { productos } });
      onClose?.(); // 👈 cerramos aside al confirmar compra
    }
  };

  return (
    <section className={styles.carritoContainer}>
      {productos.length === 0 ? (
        <>
          <p>No tienes ningún producto en tu carrito de compras.</p>
          <Boton 
            texto="Continuar comprando"
            tipo="danger-2"
            onClick={() => {
              navigate('/');
              onClose?.(); // 👈 cerramos aside al continuar comprando
            }}
          />
        </>
      ) : (
        <>
          {/* Lista de productos con Bootstrap Grid */}
          <ul className={`row ${styles.carritoList}`} role="list">
            {productos.map((producto) => {
              const { id, imagen, nombre, precio, aplicaCuotas, cuotas, valorCuota, cantidad } = producto;

              return (
                <li 
                  key={id} 
                  className={`col-12 col-md-6 col-lg-4 ${styles.carritoItem}`} 
                  role="listitem"
                >
                  {/* BOTÓN ELIMINAR ARRIBA */}
                  <button 
                    className={styles.deleteTopRight}
                    onClick={() => eliminarProducto(id)}
                    aria-label="Eliminar producto"
                  >
                    <MdDeleteForever />
                  </button>

                  <img src={imagen} alt={nombre} className={styles.carritoImg}/>

                  <div className={styles.carritoInfo}>
                    <p className={styles.carritoTitle}>{nombre}</p>

                    {/* ✅ Precio unitario con helper */}
                    <p className={styles.carritoPrice}>
                      {formatearPrecio(precio)}
                    </p>

                    {/* ✅ Bloque de cuotas */}
                    {aplicaCuotas && (
                      <div className={styles.cuotasPromo}>
                        <span className={styles.bloqueMagenta}>{cuotas} cuotas</span>
                        <span className={styles.bloqueAzul}>
                          sin interés de {formatearPrecio(valorCuota)}
                        </span>
                      </div>
                    )}

                    {/* CONTROL DE CANTIDAD */}
                    <div className={styles.cantidadWrapper}>
                      <button 
                        className={styles.btnQty}
                        onClick={() => actualizarCantidad(id, cantidad - 1)}
                        disabled={cantidad <= 1}
                      >
                        -
                      </button>

                      <span className={styles.qtyDisplay}>{cantidad}</span>

                      <button 
                        className={styles.btnQty}
                        onClick={() => actualizarCantidad(id, cantidad + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* ✅ Total con helper */}
          <div className={styles.carritoTotal}>
            <strong>Total: {formatearPrecio(total)}</strong>
          </div>

          {/* Botones con Bootstrap Grid */}
          <div className="row mt-3">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <Boton
                texto="Vaciar Carrito"
                tipo="danger-2"
                onClick={() => confirm('¿Seguro que querés vaciar el carrito?') && vaciarCarrito()}
              />
            </div>
            <div className="col-12 col-md-6">
              <Boton
                texto="Comprar"
                tipo="primary"
                onClick={handleCompra}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Carrito;