import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProductosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 0;
  list-style: none;

  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProductoItem = styled.li`
  height: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  opacity: 0;
  animation: ${fadeIn} 0.35s cubic-bezier(0.25, 1.25, 0.5, 1) forwards;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const PrecioOriginal = styled.p`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
  margin: 4px 0;

  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

export const PrecioActual = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 4px 0;

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;