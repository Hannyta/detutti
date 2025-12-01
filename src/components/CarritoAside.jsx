import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';
import styles from './CarritoAside.module.css';

const CarritoAside = ({ cerrarAside, isOpen }) => {
  return (
    <aside 
      className={`${styles.asideCarrito} ${isOpen ? styles.open : styles.closed}`} 
      id="carritoAside"
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.asideHeader}>
        <h2 className={styles.asideTitle}>Carrito</h2>
        <button 
          className={styles.cerrarAside} 
          onClick={cerrarAside} 
          aria-label="Cerrar carrito"
        >
          <IoMdClose />
        </button>
      </div>

      {/* Contenedor scroll */}
      <div className={styles.asideContent}>
        {/* 👇 Pasamos cerrarAside como onClose */}
        <Carrito onClose={cerrarAside} />
      </div>
    </aside>
  );
};

export default CarritoAside;