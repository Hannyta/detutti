import { useState } from "react";
import Boton from "../components/Boton";

const Compra = ({ productos = [], vaciarCarrito }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni:"",
    direccion: "",
    metodoPago: "tarjeta",
  });

  const total = productos.reduce((acc, p) => acc + p.price, 0);

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
    <section className="compra-container">
      <h2>Finalizar compra</h2>

      <div className="compra-resumen">
        <h3>Resumen del pedido:</h3>
        {productos.map((p) => (
          <p key={p.id}>
            {p.title} - ${p.price}
          </p>
        ))}
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <div className="compra-form">
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