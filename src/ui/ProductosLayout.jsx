import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProductosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none !important;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductoItem = styled.li`
  list-style: none !important;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  padding: 1rem;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  opacity: 0;
  animation: ${fadeIn} 0.35s ease forwards;
`;

export const PrecioOriginal = styled.p`
  font-size: 0.8rem;
  color: #999;
  text-decoration: line-through;
  margin: 2px 0;
`;

export const PrecioActual = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 4px 0 2px;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const PorcentajeDescuento = styled.p`
  font-size: 0.7rem;
  color: #e74883;
  font-weight: 600;
  margin: 2px 0;
`;

export const EtiquetaDescuento = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #e74883;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;