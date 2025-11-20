import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2019-{year} Detutti C.A.</p>
      <p>Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;