import TarjetaProducto from './TarjetaProducto';
import styles from './Productos.module.css';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className={styles.productosContainer}>
      {productos.map(producto => (
        <li className={styles.productoItem} key={producto.id}>
          <TarjetaProducto
            id={producto.id}
            img={producto.image}
            nombre={producto.title}
            precio={producto.price}
            boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar 🛒'}
            onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
          />
        </li>
      ))}
    </ul>
  );
};

export default Productos;
