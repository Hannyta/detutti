import { useEffect, useState, useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import styles from './Categoria.module.css';
import { CarritoContext } from '../context/CarritoContext';

const Categoria = ({ nombreCategoria, categoriaAPI }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const formatoPrecio = new Intl.NumberFormat('es-AR', { 
    style: 'currency', 
    currency: 'ARS' 
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://fakestoreapi.com/products/category/${categoriaAPI}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          setError("Error al cargar productos");
          setCargando(false);
        }
      });
    return () => controller.abort();
  }, [categoriaAPI]);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.categoria}>
      <h2 className={styles.titleSection}>{nombreCategoria}</h2>
      <div className={styles.gridTarjetas}>
        {productos.map(producto => (
          <TarjetaProducto
            key={producto.id}
            id={producto.id}
            img={producto.image}
            nombre={producto.title}
            precio={formatoPrecio.format(producto.price)}  
            boton={carrito.find(p => p.id === producto.id) ? "✅ Agregado" : "Agregar 🛒"}
            onClick={() => agregarProducto(producto)}
          />
        ))}
      </div>
    </section>
  );
};

export default Categoria;