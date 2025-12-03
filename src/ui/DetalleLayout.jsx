import styled from "styled-components";

export const DetalleContainer = styled.section`
  display: flex;
  gap: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;

export const Galeria = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagenPrincipal = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  object-fit: contain;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const InfoProducto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Titulo = styled.h2`
  color: #222;
  margin-bottom: 1rem;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const PrecioBox = styled.div`
  margin: 1rem 0;
`;

export const PrecioFinal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #d32f2f;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const Descripcion = styled.div`
  margin-top: 2rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #005BAC;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.5;
  }
`;

/* ✅ Cambiado de styled.p a styled.div */
export const InfoExtra = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;

  p {
    margin: 0.3rem 0;
  }
`;

export const Acciones = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

export const CantidadSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  height: 40px;
  background: #fff;
`;

export const BtnCantidad = styled.button`
  width: 40px;
  height: 100%;
  border: none;
  background: #f3f3f3;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
  font-weight: bold;

  &:hover {
    background: #e0e0e0;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #32a3e4;
  }

  @media (max-width: 400px) {
    width: 32px;
    font-size: 1rem;
  }
`;

export const Cantidad = styled.span`
  width: 50px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 400px) {
    width: 40px;
    font-size: 0.9rem;
  }
`;

export const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  &:hover span {
    transform: scale(1.05);
  }
`;

export const BloqueMagenta = styled.span`
  background-color: #e74883;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: nowrap;
  height: 26px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-right: -12px;
  transition: transform 0.3s ease;
`;

export const BloqueAzul = styled.span`
  background-color: #209ce4;
  color: white;
  padding: 4px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: nowrap;
  height: 18px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
`;

export const Mensaje = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #2e7d32;
  background: #e8f5e9;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
`;
