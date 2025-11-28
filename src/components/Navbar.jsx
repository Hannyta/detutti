import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthContext();
  const esAdmin = user?.rol === 'admin';

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/moda">Moda</Link></li>
        <li className={styles.navItem}><Link to="/tecnologia">Tecnología</Link></li>
        <li className={styles.navItem}><Link to="/accesorios">Accesorios</Link></li>

        {/* Solo visible si el usuario es admin */}
        {esAdmin && (
          <li className={styles.navItem}><Link to="/admin">Panel Admin</Link></li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;