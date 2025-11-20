import Boton from './Boton';
import { Link } from 'react-router-dom';
import styles from './TarjetaProducto.module.css';

const TarjetaProducto = ({ img, nombre, precio, boton, onClick, id }) => {
  return (
    <article className={styles.tarjeta}>
      <Link to={`/productos/${id}`} className={styles.tarjetaLink}>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
      </Link>
      <h4>Precio: {precio}</h4> {/* 👈 precio ya formateado */}
      <Boton 
        texto={boton} 
        onClick={onClick} 
        aria-label={`Agregar ${nombre} al carrito`} 
      />
    </article>
  );
};

export default TarjetaProducto;