import { useState, useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Boton from '../ui/Boton';
import Precio from '../components/Precio';
import { CarritoContext } from '../context/CarritoContext';
import { formatearPrecio } from '../helpers/formatearPrecio';
import { toast } from 'react-toastify';

import {
  CompraContainer, TituloPagina, CompraResumen, ResumenItem, ResumenInfo,
  ResumenTitle, ResumenPrice, CantidadWrapper, BtnQty, QtyDisplay, Subtotal,
  CuotasPromo, BloqueMagenta, BloqueAzul, ResumenTotal, CompraForm
} from '../ui/CompraLayout';

const Compra = ({ productos = [] }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { vaciarCarrito } = useContext(CarritoContext);

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

  // ✅ Unificar incrementar/decrementar
  const actualizarCantidad = (id, delta) => {
    setProductosCompra(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, cantidad: Math.max((p.cantidad || 1) + delta, 1) }
          : p
      )
    );
  };

  // ✅ Memorizar total con descuento aplicado
  const total = useMemo(() =>
    productosCompra.reduce((acc, p) => {
      const precioBase = Number(p.precio) || 0;
      const precioConDescuento = precioBase - (precioBase * (p.descuento || 0) / 100);
      return acc + precioConDescuento * (p.cantidad || 1);
    }, 0),
    [productosCompra]
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validación
  const validarForm = () => {
    if (!formData.nombre || !formData.dni || !formData.direccion || !formData.codigoPostal) {
      return "Por favor completa todos los campos.";
    }
    if (!/^\d+$/.test(formData.dni)) {
      return "El DNI debe ser numérico.";
    }
    if (!/^\d+$/.test(formData.codigoPostal) || formData.codigoPostal.length < 4) {
      return "El código postal debe ser numérico y tener al menos 4 dígitos.";
    }
    return null;
  };

  const handleConfirmarCompra = (e) => {
    e.preventDefault();
    const error = validarForm();
    if (error) {
      toast.error(error);
      return;
    }

    toast.success("¡Gracias por tu compra! Tus productos llegarán pronto 🚚✨");
    vaciarCarrito();
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <CompraContainer aria-label="Finalizar compra">
      <TituloPagina>Finalizar compra</TituloPagina>

      <CompraResumen>
        <h3>Resumen del pedido:</h3>

        {productosCompra.map((p) => {
          const precioBase = Number(p.precio) || 0;
          const precioConDescuento = precioBase - (precioBase * (p.descuento || 0) / 100);
          const subtotal = precioConDescuento * (p.cantidad || 1);

          return (
            <ResumenItem key={p.id}>
              <img src={p.imagen} alt={`Imagen de ${p.nombre}`} />

              <ResumenInfo>
                <ResumenTitle>{p.nombre}</ResumenTitle>

                <ResumenPrice>
                  <Precio precio={p.precio} descuento={p.descuento} />
                </ResumenPrice>

                {/* CONTROL DE CANTIDAD */}
                <CantidadWrapper>
                  <BtnQty
                    onClick={() => actualizarCantidad(p.id, -1)}
                    disabled={p.cantidad <= 1}
                    aria-disabled={p.cantidad <= 1}
                  >
                    -
                  </BtnQty>

                  <QtyDisplay>{p.cantidad || 1}</QtyDisplay>

                  <BtnQty onClick={() => actualizarCantidad(p.id, +1)}>+</BtnQty>
                </CantidadWrapper>

                {/* SUBTOTAL */}
                <Subtotal>
                  Subtotal:{" "}
                  <strong>{formatearPrecio(subtotal)}</strong>
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
          );
        })}

        <ResumenTotal>Total: {formatearPrecio(total)}</ResumenTotal>
      </CompraResumen>

      <CompraForm onSubmit={handleConfirmarCompra}>
        <fieldset>
          <legend>Datos de envío:</legend>

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
            <option value="tarjeta">💳 Tarjeta</option>
            <option value="efectivo">💵 Efectivo</option>
            <option value="transferencia">📩 Transferencia</option>
          </select>
        </fieldset>

        <Boton type="submit" tipo="primary">
          Finalizar Compra
        </Boton>
      </CompraForm>
    </CompraContainer>
  );
};

export default Compra;