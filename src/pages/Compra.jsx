import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './Compra.module.css';
import { CarritoContext } from '../context/CarritoContext';
import { formatearPrecio } from '../helpers/formatearPrecio';

const Compra = ({ productos = [] }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { vaciarCarrito } = useContext(CarritoContext);

  // Inicializamos una copia editable de productos
  const [productosCompra, setProductosCompra] = useState(
    state?.productos || productos
  );

  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    codigoPostal: "",
    metodoPago: "tarjeta",
  });

  // 📌 MANEJAR CAMBIO DE CANTIDADES
  const incrementar = (id) => {
    setProductosCompra((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
      )
    );
  };

  const decrementar = (id) => {
    setProductosCompra((prev) =>
      prev.map((p) =>
        p.id === id && p.cantidad > 1
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );
  };

  // 📌 TOTAL AUTOMÁTICO
  const total = productosCompra.reduce(
    (acc, p) => acc + (Number(p.precio) || 0) * (p.cantidad || 1),
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
      <h2 className={styles.tituloPagina}>Finalizar compra</h2>

      <div className={styles.compraResumen}>
        <h3>Resumen del pedido:</h3>

        {productosCompra.map((p) => (
          <div className={styles.resumenItem} key={p.id}>
            <img src={p.imagen} alt={p.nombre} />

            <div className={styles.resumenInfo}>
              <p className={styles.resumenTitle}>{p.nombre}</p>

              <p className={styles.resumenPrice}>
                Precio: {formatearPrecio(p.precio)}
              </p>

              {/* CONTROL DE CANTIDAD */}
              <div className={styles.cantidadWrapper}>
                <button
                  className={styles.btnQty}
                  onClick={() => decrementar(p.id)}
                  disabled={p.cantidad <= 1}
                >
                  -
                </button>

                <span className={styles.qtyDisplay}>
                  {p.cantidad || 1}
                </span>

                <button
                  className={styles.btnQty}
                  onClick={() => incrementar(p.id)}
                >
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <p className={styles.subtotal}>
                Subtotal:{" "}
                <strong>
                  {formatearPrecio((p.precio || 0) * (p.cantidad || 1))}
                </strong>
              </p>

              {/* CUOTAS */}
              {p.aplicaCuotas && p.cuotas && p.valorCuota && (
                <div className={styles.cuotasPromo}>
                  <span className={styles.bloqueMagenta}>{p.cuotas} cuotas</span>
                  <span className={styles.bloqueAzul}>
                    sin interés de {formatearPrecio(p.valorCuota)}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        <strong className={styles.resumenTotal}>
          Total: {formatearPrecio(total)}
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