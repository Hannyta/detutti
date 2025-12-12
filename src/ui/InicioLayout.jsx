import styled from "styled-components";

export const InicioMain = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: ${({ $isHome }) => ($isHome ? '0' : '10px')};
`;

export const TituloSeccion = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #005BAC;
  margin-bottom: 20px;
  text-align: center;
`;

export const Mensaje = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
`;

export const ErrorBox = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
`;