import Navbar from './Navbar';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { MdLogout } from "react-icons/md";
import styles from './Header.module.css';
import { useAuthContext } from '../context/AuthContext';

const Header = ({ contadorCarrito, onCarritoClick }) => {
  const { user, logout } = useAuthContext();
  const esAdmin = user?.rol === 'admin';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/">
            <img className={styles.logoPrincipal} src={logo} alt="Logo Detutti" />
          </Link>
        </div>

        {/* Navbar */}
        <Navbar user={user} />

        {/* Iconos */}
        <div className={styles.headerIcon}>
          {user ? (
            <>
              {esAdmin ? (
                <Link to="/admin" className={styles.adminLink}>
                  Hola, {user.nombre}
                </Link>
              ) : (
                <span className={styles.userGreeting}>Hola, {user.nombre}</span>
              )}
              <button onClick={logout} 
                className={styles.logoutIcon} aria-label="Cerrar sesión">
                <MdLogout />
              </button>
              
            </>
          ) : (
            <Link to="/login" className={styles.loginLink} title="Iniciar sesión" aria-label="Login">
              <FaUserLarge className={styles.iconoUser} />
            </Link>
          )}

          <div 
            className={styles.headerCarrito} 
            onClick={onCarritoClick} 
            role="button" 
            aria-label="Ver carrito"
          >
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