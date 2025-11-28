import TarjetaProducto from './TarjetaProducto';
import styles from './Productos.module.css';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  const formatoPrecio = new Intl.NumberFormat('es-AR', { 
    style: 'currency', 
    currency: 'ARS' 
  });

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className={styles.productosContainer}>
      {productos.map(producto => (
        <li className={styles.productoItem} key={producto.id}>
          <TarjetaProducto
            id={producto.id}
            img={producto.imagen}
            nombre={producto.nombre}
            precio={formatoPrecio.format(producto.precio)} 
            boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar 🛒'}
            onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
          />
        </li>
      ))}
    </ul>
  );
};

export default Productos;