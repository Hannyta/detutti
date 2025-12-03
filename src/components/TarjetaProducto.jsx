import { Link } from 'react-router-dom';
import Boton from '../ui/Boton';
import CardLayout from '../ui/CardLayout';
import styled from 'styled-components';
import { formatearPrecio } from '../helpers/formatearPrecio';
import {
  PrecioActual,
  PrecioOriginal,
  PorcentajeDescuento,
  EtiquetaDescuento
} from '../ui/ProductosLayout';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Imagen = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 900px) { width: 120px; height: 120px; }
  @media (max-width: 600px) { width: 100px; height: 100px; }
  @media (max-width: 360px) { width: 80px; height: 80px; }
`;

const Nombre = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;
  text-align: left;
  width: 100%;
  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
`;

const PreciosRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: nowrap;
  margin: 12px 0 16px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const BloqueMagenta = styled.span`
  background-color: #e74883;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 0.75rem;
  margin-right: -12px;
  height: 26px;
  display: incline-flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 1224px), (max-width: 400px) {
    font-size: 0.75rem;
    padding: 2px 8px;
    height: 24px;
    margin-right: -8px;
  }
`;

const BloqueAzul = styled.span`
  background-color: #209ce4;
  color: white;
  padding: 2px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.65rem;
  height: 18px;
  display: incline-flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 1224px), (max-width: 400px) {
    font-size: 0.65rem;
    padding: 2px 10px;
  }
`;

const TarjetaProducto = ({
  id,
  imagen,
  nombre,
  precioOriginal,
  precioConDescuento,
  enOferta,
  aplicaCuotas,
  cuotas,
  valorCuota,
  boton
}) => {
  const porcentaje = enOferta
    ? Math.round(100 - (precioConDescuento / precioOriginal) * 100)
    : null;

  return (
    <CardLayout>
      {enOferta && (
        <EtiquetaDescuento>{porcentaje}% OFF</EtiquetaDescuento>
      )}

      <StyledLink
        to={`/productos/${id}`}
        aria-label={`Ver detalles de ${nombre}`}
      >
        <Imagen src={imagen} alt={`Imagen del producto ${nombre}`} />
        <Nombre>{nombre}</Nombre>
      </StyledLink>

      {enOferta ? (
        <PreciosRow>
          <PrecioActual>{formatearPrecio(precioConDescuento)}</PrecioActual>
          <PrecioOriginal>{formatearPrecio(precioOriginal)}</PrecioOriginal>
          <PorcentajeDescuento>{porcentaje}% OFF</PorcentajeDescuento>
        </PreciosRow>
      ) : (
        <PreciosRow>
          <PrecioActual>{formatearPrecio(precioConDescuento)}</PrecioActual>
        </PreciosRow>
      )}

      {aplicaCuotas && cuotas && valorCuota && (
        <CuotasPromo>
          <BloqueMagenta>{cuotas} cuotas</BloqueMagenta>
          <BloqueAzul>
            sin interés de ${valorCuota.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
          </BloqueAzul>
        </CuotasPromo>
      )}

      {boton}
    </CardLayout>
  );
};

export default TarjetaProducto;