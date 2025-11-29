import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './ProductoDetalle.module.css';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from '../context/ProductosContext'; 
import { formatearPrecio } from '../helpers/formatearPrecio'; 

const ProductoDetalle = () => {
  const { id } = useParams();
  const { productos, cargando, error } = useProductosContext();
  const { agregarProducto } = useContext(CarritoContext);

  const producto = productos.find(p => p.id === id);
  const [cantidad, setCantidad] = useState(1); // 👈 estado para la cantidad

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  // Funciones para manejar cantidad
  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={styles.detalleContainer}>
      <div className={styles.galeria}>
        <img src={producto.imagen} alt={producto.nombre} className={styles.imagenPrincipal} />
      </div>

      <div className={styles.infoProducto}>
        <h2 className={styles.titulo}>{producto.nombre}</h2>

        <div className={styles.precioBox}>
          <span className={styles.precioFinal}>{formatearPrecio(producto.precio)}</span>
          {(producto.categoria === "tecnologia" || producto.precio > 200000) && (
            <p className={styles.cuotas}>Hasta 6 cuotas sin interés</p>
          )}
        </div>

        {/* Selector de cantidad + botón */}
        <div className={styles.acciones}>
          <div className={styles.cantidadSelector}>
            <button onClick={disminuir} className={styles.btnCantidad}>-</button>
            <span className={styles.cantidad}>{cantidad}</span>
            <button onClick={aumentar} className={styles.btnCantidad}>+</button>
          </div>

          <Boton
            texto="Agregar al carrito 🛒"
            onClick={() => agregarProducto({ ...producto, cantidad })}
            tipo="primary"
          />
        </div>

        <div className={styles.descripcion}>
          <h4>Descripción del producto</h4>
          <p>{producto.descripcion}</p>
        </div>

        <div className={styles.infoExtra}>
          <p><strong>Categoría:</strong> {producto.categoria}</p>
          <p><strong>Subcategoría:</strong> {producto.subCategoria}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;