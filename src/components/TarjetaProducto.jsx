import { Link } from 'react-router-dom';
import CardLayout from '../ui/CardLayout';
import styled from 'styled-components';
import {
  EtiquetaDescuento
} from '../ui/ProductosLayout';
import Precio from './Precio';

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

const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: normal;
  margin: 8px 0 16px;
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
  font-size: clamp(0.65rem, 1vw, 0.75rem);
  margin-right: -10px;
  min-height: 26px;
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 700px) {
    font-size: 0.65rem;
    padding: 2px 8px;
    margin-right: -8px;
  }
`;

const BloqueAzul = styled.span`
  background-color: #209ce4;
  color: white;
  padding: 2px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: clamp(0.55rem, 1vw, 0.65rem);
  min-height: 20px;
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 0.6rem;
    padding: 2px 8px;
  }
`;

const TarjetaProducto = ({
  id,
  imagen,
  nombre,
  precio,
  descuento,
  aplicaCuotas,
  cuotas,
  valorCuota,
  boton
}) => {

  const precioConDescuento = precio - (precio * (descuento / 100));
  return (
    <CardLayout>
      {descuento > 0 && (
        <EtiquetaDescuento>{descuento}% OFF</EtiquetaDescuento>
      )}

      <StyledLink
        to={`/productos/${id}`}
        aria-label={`Ver detalles de ${nombre}`}
      >
        <Imagen src={imagen} alt={`Imagen del producto ${nombre}`} />
        <Nombre>{nombre}</Nombre>
      </StyledLink>

      <Precio precio={precio} descuento={descuento} />

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