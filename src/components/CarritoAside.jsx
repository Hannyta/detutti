import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';
import styles from './CarritoAside.module.css';

const CarritoAside = ({ productos, cerrarAside, vaciarCarrito, eliminarDelCarrito, usuarioLogueado, actualizarCantidad }) => {
  return (
    <aside className={styles.asideCarrito} id="carritoAside">
      <div className={styles.asideHeader}>
        <button className={styles.cerrarAside} onClick={cerrarAside}>
          <IoMdClose />
        </button>
      </div>

      <Carrito
        productos={productos}
        vaciarCarrito={vaciarCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
        usuarioLogueado={usuarioLogueado}
        actualizarCantidad={actualizarCantidad}
      />
    </aside>
  );
};

export default CarritoAside;