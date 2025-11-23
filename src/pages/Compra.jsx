import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './Compra.module.css';
import { CarritoContext } from '../context/CarritoContext';

const Compra = ({ productos = [] }) => {
  const { state } = useLocation();
  const productosCompra = state?.productos || productos;
  const { vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    dni:"",
    direccion: "",
    codigoPostal: "",
    metodoPago: "tarjeta",
  });

  const formatoPrecio = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

  const total = productosCompra.reduce(
    (acc, p) => acc + p.price * (p.cantidad || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmarCompra = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.dni || !formData.direccion || !formData.codigoPostal) {
      alert("Por favor completa todos los campos.");
    return;
    }
    if (confirm("¿Confirmás la compra?")) {
      alert("¡Gracias por tu compra!");
      vaciarCarrito();
      navigate("/"); 
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
              <p className={styles.resumenPrice}>
                {formatoPrecio.format(p.price)} x {p.cantidad || 1}
              </p>
            </div>
          </div>
        ))}
        <strong className={styles.resumenTotal}>
          Total: {formatoPrecio.format(total)}
        </strong>
      </div>

      <form className={styles.compraForm} onSubmit={handleConfirmarCompra}>
        <h3>Datos de envío</h3>

        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="dni">Documento</label>
        <input
        type="number"
        id="dni"
        name="dni"
        placeholder="Documento"
        value={formData.dni}
        onChange={handleChange}
        required
        />

        <label htmlFor="direccion">Dirección</label>
        <input
        type="text"
        id="direccion"
        name="direccion"
        placeholder="Dirección"
        value={formData.direccion}
        onChange={handleChange}
        required
        />

        <label htmlFor="codigoPostal">Código Postal</label>
        <input
        type="text"
        id="codigoPostal"
        name="codigoPostal"
        placeholder="Código Postal"
        value={formData.codigoPostal}
        onChange={handleChange}
        required
        />

        <label htmlFor="metodoPago">Método de pago</label>
        <select
          id="metodoPago"
          name="metodoPago"
          value={formData.metodoPago}
          onChange={handleChange}
        >
          <option value="tarjeta">Tarjeta</option>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
        </select>

        <Boton texto="Confirmar compra" tipo="primary" />
      </form>
    </section>
  );
};

export default Compra;