import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './Compra.module.css';

const Compra = ({ productos = [], vaciarCarrito }) => {
  const { state } = useLocation();
  const productosCompra = state?.productos || productos;

  const [formData, setFormData] = useState({
    nombre: "",
    dni:"",
    direccion: "",
    metodoPago: "tarjeta",
  });

  const total = productosCompra.reduce((acc, p) => acc + p.price, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmarCompra = () => {
    if (!formData.nombre || !formData.direccion) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (confirm("¿Confirmás la compra?")) {
      alert("¡Gracias por tu compra!");
      vaciarCarrito();
    }
  };

  return (
    <section className={styles.compraContainer}>
      <h2>Finalizar compra</h2>

      <div className={styles.compraResumen}>
        <h3>Resumen del pedido:</h3>
        {productosCompra.map((p) => (
          <div className={styles.resumenItem} key={p.id}>
            <img src={p.image} alt={p.title}/>
            <div className={styles.resumenInfo}>
              <p className={styles.resumenTitle}>{p.title}</p>
              <p className={styles.resumenPrice}>${p.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <strong className={styles.resumenTotal}>Total: ${total.toFixed(2)}</strong>
      </div>

      <div className={styles.compraForm}>
        <h3>Datos de envío</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dni"
          placeholder="Documento"
          value={formData.dni}
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
        />

        <label>Método de pago</label>
        <select name="metodoPago" value={formData.metodoPago} onChange={handleChange}>
          <option value="tarjeta">Tarjeta</option>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
        </select>

        <Boton texto="Confirmar compra" tipo="primary" onClick={handleConfirmarCompra} />
      </div>
    </section>
  );
};

export default Compra;