import Boton from '../ui/Boton';
import Precio from './Precio';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext';
import { formatearPrecio } from '../helpers/formatearPrecio';
import { toast } from 'react-toastify';

import {
  CarritoContainer, CarritoList, CarritoItem, CarritoImg, CarritoInfo,
  CarritoTitle, CarritoPrice, CarritoTotal, DeleteTopRight, CantidadWrapper,
  BtnQty, QtyDisplay, CuotasPromo, BloqueMagenta, BloqueAzul, BotonesFinales,
  EtiquetaDescuentoCarrito, ImagenWrapper
} from '../ui/CarritoLayout';

const Carrito = ({ onClose }) => {
  const { carrito, vaciarCarrito, eliminarProducto, actualizarCantidad, totalFormateado } = useContext(CarritoContext);
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleCompra = () => {
    if (!isAuthenticated) {
      toast.error("Debes iniciar sesión para realizar la compra.", {
        autoClose: 500,
        hideProgressBar: true,
        style: { backgroundColor: "#d32f2f", color: "#fff", fontWeight: 600 }
      });

      navigate('/login');
      onClose?.();
      return;
    }

    toast((t) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span>¿Confirmás esta compra?</span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              navigate('/compra', { state: { productos: carrito } });
              onClose?.();
            }}
            style={{
              padding: "6px 12px",
              background: "#4caf50",
              color: "white",
              borderRadius: "4px"
            }}
          >
            Sí
          </button>

          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              padding: "6px 12px",
              background: "#d32f2f",
              color: "white",
              borderRadius: "4px"
            }}
          >
            No
          </button>
        </div>
      </div>
    ), {
      autoClose: false,
      closeOnClick: false,
      draggable: false
    });
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
              const { id, imagen, nombre, aplicaCuotas, cuotas, valorCuota, cantidad, precio, descuento } = producto;

              return (
                <CarritoItem key={id} role="listitem">
                  <DeleteTopRight
                    onClick={() => {
                      eliminarProducto(id);
                      toast.info(`${nombre} eliminado del carrito`, {
                        autoClose: 1500,
                        hideProgressBar: true,
                        style: { backgroundColor: "#555", color: "#fff" }
                      });
                    }}
                    aria-label="Eliminar producto"
                  >
                    <MdDeleteForever />
                  </DeleteTopRight>

                  <ImagenWrapper>
                    {descuento > 0 && <EtiquetaDescuentoCarrito>{descuento}% OFF</EtiquetaDescuentoCarrito>}
                    <CarritoImg src={imagen} alt={nombre} />
                  </ImagenWrapper>

                  <CarritoInfo>
                    <CarritoTitle>{nombre}</CarritoTitle>
                    <Precio precio={precio} descuento={descuento} />

                    {aplicaCuotas && (
                      <CuotasPromo>
                        <BloqueMagenta>{cuotas} cuotas</BloqueMagenta>
                        <BloqueAzul>
                          sin interés de {formatearPrecio(valorCuota)}
                        </BloqueAzul>
                      </CuotasPromo>
                    )}

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

          <CarritoTotal>
            <strong>Total: {totalFormateado}</strong>
          </CarritoTotal>

          <BotonesFinales>
            <Boton
              tipo="secondary"
              onClick={() =>
                toast((t) => (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span>¿Seguro que querés vaciar el carrito?</span>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => {
                          vaciarCarrito();
                          toast.dismiss(t.id);
                          toast.success("Productos eliminados", {
                            autoClose: 1500,
                            hideProgressBar: true
                          });
                        }}
                        style={{
                          padding: "6px 12px",
                          background: "#4caf50",
                          color: "white",
                          borderRadius: "4px"
                        }}
                      >
                        Sí
                      </button>

                      <button
                        onClick={() => toast.dismiss(t.id)}
                        style={{
                          padding: "6px 12px",
                          background: "#d32f2f",
                          color: "white",
                          borderRadius: "4px"
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ), {
                  autoClose: false,
                  closeOnClick: false,
                  draggable: false
                })
              }
            >
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