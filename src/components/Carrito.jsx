import Boton from './Boton';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './Carrito.module.css';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext'; 

const Carrito = () => {
  const { carrito: productos, vaciarCarrito, eliminarProducto, actualizarCantidad } = useContext(CarritoContext);
  const { isAuthenticated } = useAuthContext(); 
  const navigate = useNavigate();

  const total = productos.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);

  const handleCompra = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para realizar la compra.');
      navigate('/login');
      return;
    }
    if (confirm('¿Confirma esta compra?')) {
      navigate('/compra', { state: { productos } });
    }
  };

  return (
    <section className={styles.carritoContainer}>
      <h2>Carrito de compras</h2>

      {productos.length === 0 ? (
        <>
          <p>No tienes ningún producto en tu carrito de compras.</p>
          <Boton 
            texto="Continuar comprando"
            tipo="danger-2"
            onClick={() => navigate('/')}
          />
        </>
      ) : (
        <>
          <ul className={styles.carritoList}>
            {productos.map((producto) => (
              <li key={producto.id} className={styles.carritoItem}>
                <img src={producto.image} alt={producto.title} className={styles.carritoImg}/>
                <div className={styles.carritoInfo}>
                  <p className={styles.carritoTitle}>{producto.title}</p>
                  <p className={styles.carritoPrice}>
                    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.price)}
                  </p>

                  {/* 👇 Mostrar cuotas si aplica */}
                  {producto.aplicaCuotas && (
                    <p className={styles.cuotas}>Hasta 6 cuotas sin interés</p>
                  )}

                  <div className={styles.cantidadControl}>
                    <button
                      className={styles.cantidadBtn}
                      onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                      disabled={producto.cantidad <= 1}
                    >
                      -
                    </button>
                    
                    <input
                      type="number"
                      min="1"
                      value={producto.cantidad}
                      onChange={(e) => {
                        const nuevaCantidad = parseInt(e.target.value);
                        if (!isNaN(nuevaCantidad) && nuevaCantidad >= 1) {
                          actualizarCantidad(producto.id, nuevaCantidad);
                        }
                      }}
                      className={styles.cantidadInput}
                    />

                    <button
                      className={styles.cantidadBtn}
                      onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  <Boton 
                    texto={<MdDeleteForever />}
                    tipo="danger small"
                    onClick={() => eliminarProducto(producto.id)}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.carritoTotal}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>

          <div className={styles.botonesCarrito}>
            <Boton
              texto="Vaciar Carrito"
              tipo="danger-2"
              onClick={() => {
                if (confirm('¿Seguro que querés vaciar el carrito?')) vaciarCarrito();
              }}
            />
            <Boton
              texto="Comprar"
              tipo="primary"
              onClick={handleCompra}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Carrito;