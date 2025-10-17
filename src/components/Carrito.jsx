import Boton from './Boton';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './Carrito.module.css';

const Carrito = ({ productos = [], vaciarCarrito, eliminarDelCarrito, usuarioLogueado }) => {

  const navigate = useNavigate();
  const total = productos.reduce((acc, producto) => acc + producto.price, 0);

  const handleCompra = () => {
    if (!usuarioLogueado) {
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
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className={styles.carritoList}>
            {productos.map((producto) => (
              <li key={producto.id} className={styles.carritoItem}>
                <img src={producto.image} alt={producto.title} className={styles.carritoImg}/>
                <div className={styles.carritoInfo}>
                  <p className={styles.carritoTitle}>{producto.title}</p>
                  <p className={styles.carritoPrice}>${producto.price.toFixed(2)}</p>
                  <Boton 
                    texto={<MdDeleteForever />}
                    tipo="danger small"
                    onClick={() => eliminarDelCarrito(producto.id)}
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