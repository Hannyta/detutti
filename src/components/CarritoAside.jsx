import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';
import styles from './CarritoAside.module.css';

const CarritoAside = ({ cerrarAside }) => {
  return (
    <aside className={styles.asideCarrito} id="carritoAside">
      <div className={styles.asideHeader}>
        <button className={styles.cerrarAside} onClick={cerrarAside}>
          <IoMdClose />
        </button>
      </div>

      <Carrito />
    </aside>
  );
};

export default CarritoAside;