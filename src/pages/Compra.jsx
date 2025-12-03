import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Boton from '../ui/Boton';
import { CarritoContext } from '../context/CarritoContext';
import { formatearPrecio } from '../helpers/formatearPrecio';

// 👉 Importamos los styled-components
import { 
  CompraContainer, TituloPagina, CompraResumen, ResumenItem, ResumenInfo, 
  ResumenTitle, ResumenPrice, CantidadWrapper, BtnQty, QtyDisplay, Subtotal, 
  CuotasPromo, BloqueMagenta, BloqueAzul, ResumenTotal, CompraForm, MensajeCompra 
} from '../ui/CompraLayout';

const Compra = ({ productos = [] }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { vaciarCarrito } = useContext(CarritoContext);

  // Copia editable de productos
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

  const [mensaje, setMensaje] = useState(null);

  // 📌 CONTROL DE CANTIDADES
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

    // Validaciones básicas
    if (!formData.nombre || !formData.dni || !formData.direccion || !formData.codigoPostal) {
      alert("Por favor completa todos los campos.");
      return;
    }
    if (!/^\d+$/.test(formData.dni)) {
      alert("El DNI debe ser numérico.");
      return;
    }
    if (!/^\d+$/.test(formData.codigoPostal) || formData.codigoPostal.length < 4) {
      alert("El código postal debe ser numérico y tener al menos 4 dígitos.");
      return;
    }

    if (window.confirm("¿Confirmás la compra?")) {
      setMensaje("¡Gracias por tu compra!");
      vaciarCarrito();
      setTimeout(() => navigate("/"), 2000); // redirige después de 2s
    }
  };

  return (
    <CompraContainer aria-label="Finalizar compra">
      <TituloPagina>Finalizar compra</TituloPagina>

      <CompraResumen>
        <h3>Resumen del pedido:</h3>

        {productosCompra.map((p) => (
          <ResumenItem key={p.id}>
            <img src={p.imagen} alt={`Imagen de ${p.nombre}`} />

            <ResumenInfo>
              <ResumenTitle>{p.nombre}</ResumenTitle>

              <ResumenPrice>
                Precio: {formatearPrecio(p.precio)}
              </ResumenPrice>

              {/* CONTROL DE CANTIDAD */}
              <CantidadWrapper>
                <BtnQty
                  onClick={() => decrementar(p.id)}
                  disabled={p.cantidad <= 1}
                >
                  -
                </BtnQty>

                <QtyDisplay>{p.cantidad || 1}</QtyDisplay>

                <BtnQty onClick={() => incrementar(p.id)}>+</BtnQty>
              </CantidadWrapper>

              {/* SUBTOTAL */}
              <Subtotal>
                Subtotal:{" "}
                <strong>
                  {formatearPrecio((p.precio || 0) * (p.cantidad || 1))}
                </strong>
              </Subtotal>

              {/* CUOTAS */}
              {p.aplicaCuotas && p.cuotas && p.valorCuota && (
                <CuotasPromo>
                  <BloqueMagenta>{p.cuotas} cuotas</BloqueMagenta>
                  <BloqueAzul>
                    sin interés de {formatearPrecio(p.valorCuota)}
                  </BloqueAzul>
                </CuotasPromo>
              )}
            </ResumenInfo>
          </ResumenItem>
        ))}

        <ResumenTotal>Total: {formatearPrecio(total)}</ResumenTotal>
      </CompraResumen>

      <CompraForm onSubmit={handleConfirmarCompra}>
        <fieldset>
          <legend>Datos de envío</legend>

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
        </fieldset>

        <Boton texto="Confirmar compra" tipo="primary" />
      </CompraForm>

      {mensaje && <MensajeCompra aria-live="polite">{mensaje}</MensajeCompra>}
    </CompraContainer>
  );
};

export default Compra;