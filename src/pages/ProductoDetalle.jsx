import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './ProductoDetalle.module.css';
import { CarritoContext } from '../context/CarritoContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://fakestoreapi.com/products/${id}`, { signal: controller.signal })
      .then(resp => resp.json())
      .then(dato => {
        setProducto(dato);
        setCargando(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          setError("Error al cargar producto");
          setCargando(false);
        }
      });

    return () => controller.abort();
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.tarjetaDetalle}>
      <h2>Detalles del Producto Nro {id}</h2>
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{producto.description}</p>
      <h5>
        Precio: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.price)}
      </h5>
      <Boton
        texto="Agregar al carrito 🛒"
        onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
        tipo="primary"
      />
    </div>
  );
};

export default ProductoDetalle;