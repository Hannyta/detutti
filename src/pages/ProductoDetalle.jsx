import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductoDetalle.module.css';

const ProductoDetalle = ({ agregarAlCarrito }) => {

    const {id} = useParams();
    const [producto, setProducto] = useState(null);
    const [ error, setError] = useState(null);
    const [ cargando, setCargando] = useState(true)

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(resp => resp.json())
      .then(dato => {
        setProducto(dato);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar producto');
        setCargando(false);
      });
    }, [id]);

    if(cargando) return <p>Cargando producto...</p>;
    if(error) return <p>{error}</p>;

  return (
    <div className={styles.tarjetaDetalle}>
      <h2>Detalles del Producto Nro {id} </h2>
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{producto.description}</p>
      <h5>Precio: {producto.price}</h5>
      <button
        className="btn primary"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito 🛒
      </button>
    </div>
    
  )
}

export default ProductoDetalle;
