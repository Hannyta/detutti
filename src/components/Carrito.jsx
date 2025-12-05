import Boton from '../ui/Boton';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext'; 
import { formatearPrecio } from '../helpers/formatearPrecio';

import { 
  CarritoContainer, CarritoList, CarritoItem, CarritoImg, CarritoInfo, 
  CarritoTitle, CarritoPrice, CarritoTotal, DeleteTopRight, CantidadWrapper, 
  BtnQty, QtyDisplay, CuotasPromo, BloqueMagenta, BloqueAzul, BotonesFinales,
  EtiquetaDescuentoCarrito, ImagenWrapper // 🔹 nuevos estilos
} from '../ui/CarritoLayout';

const Carrito = ({ onClose }) => {
  const { carrito, vaciarCarrito, eliminarProducto, actualizarCantidad, totalFormateado } = useContext(CarritoContext);
  const { isAuthenticated } = useAuthContext(); 
  const navigate = useNavigate();

  const handleCompra = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para realizar la compra.');
      navigate('/login');
      onClose?.();
      return;
    }
    if (confirm('¿Confirma esta compra?')) {
      navigate('/compra', { state: { productos: carrito } });
      onClose?.();
    }
  };

  return (
    <CarritoContainer>
      {carrito.length === 0 ? (
        <>
          <p>No tienes ningún producto en tu carrito de compras.</p>
          <Boton tipo="primary" onClick={() => { navigate('/'); onClose?.(); }}>
            Continuar comprando
          </Boton>
        </>
      ) : (
        <>
          <CarritoList role="list">
            {carrito.map((producto) => {
              const { id, imagen, nombre, aplicaCuotas, cuotas, valorCuota, cantidad, enOferta, precioOriginal, precioConDescuento, precio } = producto;

              return (
                <CarritoItem key={id} role="listitem">
                  <DeleteTopRight
                    onClick={() => eliminarProducto(id)}
                    aria-label="Eliminar producto"
                  >
                    <MdDeleteForever />
                  </DeleteTopRight>

                  {/* 🔹 Imagen con badge */}
                  <ImagenWrapper>
                    {enOferta && <EtiquetaDescuentoCarrito>15% OFF</EtiquetaDescuentoCarrito>}
                    <CarritoImg src={imagen} alt={nombre} />
                  </ImagenWrapper>

                  <CarritoInfo>
                    <CarritoTitle>{nombre}</CarritoTitle>

                    {/* 🔹 Precio con descuento si aplica */}
                    <CarritoPrice>
                      {enOferta && (
                        <span style={{ textDecoration: "line-through", color: "#888", marginRight: "8px" }}>
                          {formatearPrecio(precioOriginal)}
                        </span>
                      )}
                      <span style={{ color: "#d32f2f", fontWeight: "700" }}>
                        {formatearPrecio(enOferta ? precioConDescuento : precio)}
                      </span>
                    </CarritoPrice>

                    {/* Bloque de cuotas */}
                    {aplicaCuotas && (
                      <CuotasPromo>
                        <BloqueMagenta>{cuotas} cuotas</BloqueMagenta>
                        <BloqueAzul>
                          sin interés de {formatearPrecio(valorCuota)}
                        </BloqueAzul>
                      </CuotasPromo>
                    )}

                    {/* Control de cantidad */}
                    <CantidadWrapper>
                      <BtnQty 
                        onClick={() => actualizarCantidad(id, cantidad - 1)}
                        disabled={cantidad <= 1}
                      >
                        -
                      </BtnQty>

                      <QtyDisplay>{cantidad}</QtyDisplay>

                      <BtnQty 
                        onClick={() => actualizarCantidad(id, cantidad + 1)}
                      >
                        +
                      </BtnQty>
                    </CantidadWrapper>
                  </CarritoInfo>
                </CarritoItem>
              );
            })}
          </CarritoList>

          {/* 🔹 Total */}
          <CarritoTotal>
            <strong>Total: {totalFormateado}</strong>
          </CarritoTotal>

          {/* 🔹 Botones finales centrados */}
          <BotonesFinales>
            <Boton tipo="secondary" onClick={() => confirm('¿Seguro que querés vaciar el carrito?') && vaciarCarrito()}>
              Vaciar Carrito
            </Boton>
            <Boton tipo="primary" onClick={handleCompra}>
              Comprar
            </Boton>
          </BotonesFinales>
        </>
      )}
    </CarritoContainer>
  );
};

export default Carrito;