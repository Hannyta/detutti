import styled from 'styled-components';
import { formatearPrecio } from '../helpers/formatearPrecio';
import {
  PrecioActual,
  PrecioOriginal,
  PorcentajeDescuento
} from '../ui/ProductosLayout';

// Configuración de estilos según tamaño
const sizeStyles = {
  small: {
    row: { gap: '0.5rem', fontSize: '1em', justify: 'flex-start' },
    actual: { fontSize: '1rem', fontWeight: '600' },
    original: { fontSize: '0.9rem' },
    descuento: { fontSize: '0.8rem' }
  },
  medium: {
    row: { gap: '1rem', fontSize: '1.2em', justify: 'center' },
    actual: { fontSize: '1.5rem', fontWeight: 'bold' },
    original: { fontSize: '1.2rem' },
    descuento: { fontSize: '1rem' }
  },
  large: {
    row: { gap: '1.5rem', fontSize: '1.4em', justify: 'center' },
    actual: { fontSize: '2rem', fontWeight: '800' },
    original: { fontSize: '1.5rem' },
    descuento: { fontSize: '1.2rem' }
  }
};

const PreciosRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 0.5rem;
  gap: ${({ size }) => sizeStyles[size].row.gap};
  font-size: ${({ size }) => sizeStyles[size].row.fontSize};
  justify-content: ${({ size }) => sizeStyles[size].row.justify};
`;

const PrecioActualStyled = styled(PrecioActual)`
  font-size: ${({ size }) => sizeStyles[size].actual.fontSize};
  font-weight: ${({ size }) => sizeStyles[size].actual.fontWeight};
`;

const PrecioOriginalStyled = styled(PrecioOriginal)`
  font-size: ${({ size }) => sizeStyles[size].original.fontSize};
`;

const PorcentajeDescuentoStyled = styled(PorcentajeDescuento)`
  font-size: ${({ size }) => sizeStyles[size].descuento.fontSize};
`;

const Precio = ({ precio, descuento, size = 'small' }) => {
  const precioConDescuento = precio - precio * (descuento / 100);

  return (
    <PreciosRow size={size}>
      <PrecioActualStyled size={size}>
        {formatearPrecio(precioConDescuento)}
      </PrecioActualStyled>
      {descuento > 0 && (
        <>
          <PrecioOriginalStyled size={size}>
            {formatearPrecio(precio)}
          </PrecioOriginalStyled>
          <PorcentajeDescuentoStyled size={size}>
            {descuento}% OFF
          </PorcentajeDescuentoStyled>
        </>
      )}
    </PreciosRow>
  );
};

export default Precio;