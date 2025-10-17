import Navbar from './Navbar';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import styles from './Header.module.css';

const Header = ({ contadorCarrito, onCarritoClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img className={styles.logoPrincipal} src={logo} alt="Logo Detutti" />
          </Link>
        </div>

        <Navbar />

        <div className={styles.headerIcon}>
          <Link to="/login" className={styles.loginLink} title="Iniciar sesión">
            <FaUserLarge className={styles.iconoUser} />
          </Link>
          <div className={styles.headerCarrito} onClick={onCarritoClick}>
            <FaShoppingCart className={styles.iconoCarrito} title="Ver carrito" />
            {contadorCarrito > 0 && (
              <span className={styles.contadorCarrito}>{contadorCarrito}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;