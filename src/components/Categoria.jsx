import { useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import styles from './Categoria.module.css';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from '../context/ProductosContext';
import { formatearPrecio } from '../helpers/formatearPrecio';

const Categoria = ({ nombreCategoria, categoriaAPI, subCategoriaAPI }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const { productos, cargando, error } = useProductosContext();
  
  const productosFiltrados = productos.filter(
    (p) =>
      p.categoria?.toLowerCase() === categoriaAPI.toLowerCase() &&
      (!subCategoriaAPI || p.subCategoria?.toLowerCase() === subCategoriaAPI.toLowerCase())
  );

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.categoria}>
      <h2 className={styles.titleSection}>{nombreCategoria}</h2>
      <div className={styles.gridTarjetas}>
        {productosFiltrados.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            id={producto.id}
            img={producto.imagen}
            nombre={producto.nombre}
            precio={formatearPrecio(producto.precio)}
            aplicaCuotas={producto.aplicaCuotas}
            cuotas={producto.cuotas}
            valorCuota={producto.valorCuota}
            boton={
              carrito.find((p) => p.id === producto.id)
                ? '✅ Agregado'
                : 'Agregar 🛒'
            }
            onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
          />
        ))}
      </div>
    </section>
  );
};

export default Categoria;