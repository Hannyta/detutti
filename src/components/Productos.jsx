import TarjetaProducto from './TarjetaProducto';
import styles from './Productos.module.css';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { formatearPrecio } from '../helpers/formatearPrecio';

const Productos = ({ productos, error, cargando }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);

  if (cargando) return <p>Cargando Productos...</p>;
  if (error) return <p>{error}</p>;

  console.log(productos);
  
  return (
    <ul className={styles.productosContainer}>
      {productos.map(producto => (
        <li className={styles.productoItem} key={producto.id}>
          <TarjetaProducto
            id={producto.id}
            img={producto.imagen}
            nombre={producto.nombre}
            precio={formatearPrecio(producto.precio)}
            aplicaCuotas={producto.aplicaCuotas}
            boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar al carrito 🛒'}
            onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
          />
        </li>
      ))}
    </ul>
  );
};

export default Productos;