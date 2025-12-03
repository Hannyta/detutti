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
  BtnQty, QtyDisplay, CuotasPromo, BloqueMagenta, BloqueAzul 
} from '../ui/CarritoLayout';

const Carrito = ({ onClose }) => {
  const { carrito: productos, vaciarCarrito, eliminarProducto, actualizarCantidad } = useContext(CarritoContext);
  const { isAuthenticated } = useAuthContext(); 
  const navigate = useNavigate();

  const total = productos.reduce(
    (acc, producto) => acc + (Number(producto.precio) || 0) * producto.cantidad,
    0
  );

  const handleCompra = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para realizar la compra.');
      navigate('/login');
      onClose?.();
      return;
    }
    if (confirm('¿Confirma esta compra?')) {
      navigate('/compra', { state: { productos } });
      onClose?.();
    }
  };

  return (
    <CarritoContainer>
      {productos.length === 0 ? (
        <>
          <p>No tienes ningún producto en tu carrito de compras.</p>
          <Boton 
            texto="Continuar comprando"
            tipo="danger-2"
            onClick={() => {
              navigate('/');
              onClose?.();
            }}
          />
        </>
      ) : (
        <>
          {/* Lista de productos con Bootstrap Grid */}
          <CarritoList className="row" role="list">
            {productos.map((producto) => {
              const { id, imagen, nombre, precio, aplicaCuotas, cuotas, valorCuota, cantidad } = producto;

              return (
                <CarritoItem 
                  key={id} 
                  className="col-12 col-md-6 col-lg-4"
                  role="listitem"
                >
                  {/* BOTÓN ELIMINAR */}
                  <DeleteTopRight
                    onClick={() => eliminarProducto(id)}
                    aria-label="Eliminar producto"
                  >
                    <MdDeleteForever />
                  </DeleteTopRight>

                  <CarritoImg src={imagen} alt={nombre} />

                  <CarritoInfo>
                    <CarritoTitle>{nombre}</CarritoTitle>

                    {/* Precio unitario */}
                    <CarritoPrice>{formatearPrecio(precio)}</CarritoPrice>

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

          {/* Total */}
          <CarritoTotal>
            <strong>Total: {formatearPrecio(total)}</strong>
          </CarritoTotal>

          {/* Botones finales con Bootstrap Grid */}
          <div className="row mt-3">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <Boton
                texto="Vaciar Carrito"
                tipo="danger-2"
                onClick={() => confirm('¿Seguro que querés vaciar el carrito?') && vaciarCarrito()}
              />
            </div>
            <div className="col-12 col-md-6">
              <Boton
                texto="Comprar"
                tipo="primary"
                onClick={handleCompra}
              />
            </div>
          </div>
        </>
      )}
    </CarritoContainer>
  );
};

export default Carrito;