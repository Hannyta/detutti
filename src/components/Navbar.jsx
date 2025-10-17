import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/">Inicio</Link></li>
        <li className={styles.navItem}><Link to="/moda">Moda</Link></li>
        <li className={styles.navItem}><Link to="/tecnologia">Tecnología</Link></li>
        <li className={styles.navItem}><Link to="/accesorios">Accesorios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;