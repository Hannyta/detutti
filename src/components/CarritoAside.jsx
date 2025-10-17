import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';
import styles from './CarritoAside.module.css';

const CarritoAside = ({ productos, cerrarAside, vaciarCarrito, eliminarDelCarrito, usuarioLogueado }) => {
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
      />
    </aside>
  );
};

export default CarritoAside;