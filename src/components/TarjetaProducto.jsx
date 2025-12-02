import Boton from './Boton';
import { Link } from 'react-router-dom';
import styles from './TarjetaProducto.module.css';

const TarjetaProducto = ({ 
  id, 
  img, 
  nombre, 
  precio, 
  aplicaCuotas, 
  cuotas, 
  valorCuota, 
  boton, 
  onClick 
}) => {
  return (
    <article className={styles.tarjeta}>
      <Link to={`/productos/${id}`} className={styles.tarjetaLink}>
        <img src={img} alt={`Imagen del producto ${nombre}`} />
        <h3>{nombre}</h3>
      </Link>

      <p className={styles.precio}>Precio: {precio}</p>
      
      {aplicaCuotas && cuotas && valorCuota && (
        <div className={styles.cuotasPromo}>
          <span className={styles.bloqueMagenta}>{cuotas} cuotas</span>
          <span className={styles.bloqueAzul}>
            sin interés de ${valorCuota.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
          </span>
        </div>
      )}

      <Boton 
        texto={boton} 
        onClick={onClick} 
        aria-label={`Agregar ${nombre} al carrito`} 
      />
    </article>
  );
};

export default TarjetaProducto;