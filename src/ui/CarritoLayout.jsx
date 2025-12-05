import styled from "styled-components";

export const CarritoContainer = styled.section`
  width: 100%;
  margin: 0;
  padding: 1rem;
  border-radius: 1px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
`;

export const CarritoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CarritoItem = styled.li`
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: #f9f9f988;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 4px 10px rgba(0,0,0,0.15);
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const CarritoImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const CarritoInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

export const CarritoTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: #005BAC;
  margin-bottom: 0.2rem;
  line-height: 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const CarritoPrice = styled.p`
  margin-bottom: 0.5rem;
  color: #d32f2f;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 0.75rem;
    text-align: center;
  }
`;

export const CarritoTotal = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #0a0a42;
`;

export const DeleteTopRight = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #d90429;
  font-size: 1.1rem;
  z-index:3;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const CantidadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 6px;
  width: 100%;
`;

export const BtnQty = styled.button`
  background-color: #48c0f733;
  border: none;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  color: #1F4DA8;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QtyDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
  color: #333;
`;

export const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

export const BloqueMagenta = styled.span`
  background-color: #e74883;
  color: white;
  padding: 4px 8px;
  border-radius: 16px;
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.6;
  white-space: nowrap;
  height: 22px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-right: -12px;
`;

export const BloqueAzul = styled.span`
  background-color: #209ce4;
  color: white;
  padding: 2px 14px;
  border-radius: 8px;
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 1.4;
  white-space: nowrap;
  height: 16px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const BotonesFinales = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  & > button {
    flex: 1;
    max-width: 160px; // opcional, limita el ancho máximo
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.8rem;

    & > button {
      max-width: 100%; // en mobile ocupan todo el ancho
    }
  }
`;

export const ImagenWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 100px;
`;

export const EtiquetaDescuentoCarrito = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: #e74883;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;