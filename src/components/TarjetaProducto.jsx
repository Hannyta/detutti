import { Link } from 'react-router-dom';
import Boton from '../ui/Boton';
import CardLayout from '../ui/CardLayout';
import styled from 'styled-components';

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
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;

  ${Link}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
`;

const Precio = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0.5rem 0;
`;

const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 16px;
  justify-content: center;
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
  font-size: 0.95rem;
  margin-right: -12px;
  height: 26px;
  display: flex;
  align-items: center;

  @media (min-width: 1224px), (max-width: 400px) {
    font-size: 0.75rem;
    padding: 2px 8px;
    height: 20px;
  }
`;

const BloqueAzul = styled.span`
  background-color: #209ce4;
  color: white;
  padding: 4px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  height: 18px;
  display: flex;
  align-items: center;

  @media (min-width: 1224px), (max-width: 400px) {
    font-size: 0.65rem;
    padding: 2px 12px;
    height: 15px;
  }
`;

const TarjetaProducto = ({ 
  id, 
  img, 
  nombre, 
  precio, 
  aplicaCuotas, 
  cuotas, 
  valorCuota, 
  boton, 
  onClick 
}) => {
  return (
    <CardLayout>
      <Link 
        to={`/productos/${id}`} 
        style={{ textDecoration: "none", color: "inherit" }}
        aria-label={`Ver detalles de ${nombre}`}
      >
        <Imagen src={img} alt={`Imagen del producto ${nombre}`} />
        <Nombre>{nombre}</Nombre>
      </Link>

      <Precio>Precio: {precio}</Precio>

      {aplicaCuotas && cuotas && valorCuota && (
        <CuotasPromo>
          <BloqueMagenta>{cuotas} cuotas</BloqueMagenta>
          <BloqueAzul>
            sin interés de ${valorCuota.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
          </BloqueAzul>
        </CuotasPromo>
      )}

      <Boton 
        texto={boton} 
        onClick={onClick} 
        aria-label={`Agregar ${nombre} al carrito`} 
      />
    </CardLayout>
  );
};

export default TarjetaProducto;