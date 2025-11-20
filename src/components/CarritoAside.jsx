import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';
import styles from './CarritoAside.module.css';

const CarritoAside = ({ cerrarAside, usuarioLogueado }) => {
  return (
    <aside className={styles.asideCarrito} id="carritoAside">
      <div className={styles.asideHeader}>
        <button className={styles.cerrarAside} onClick={cerrarAside}>
          <IoMdClose />
        </button>
      </div>

      <Carrito usuarioLogueado={usuarioLogueado} />
    </aside>
  );
};

export default CarritoAside;