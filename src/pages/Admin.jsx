import GestionDeProductos from '../components/GestionDeProductos';
import styles from './Admin.module.css';

const Admin = () => {
  return (
    <section className={styles.adminPage} aria-label="Panel de administración">
      <h2>Panel de Administración</h2>
      <GestionDeProductos />
    </section>
  );
};

export default Admin;