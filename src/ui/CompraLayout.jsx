import styled from "styled-components";

export const CompraContainer = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding: 10px;
    gap: 1.5rem;
  }
`;

export const TituloPagina = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #005BAC;
  margin-bottom: 10px;

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

/* ------------------- RESUMEN ------------------- */

export const CompraResumen = styled.div`
  background: #f5f9ff;
  padding: 1.8rem;
  border-radius: 14px;
  border: 1px solid #dce8ff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);

  h3 {
    margin-bottom: 1.2rem;
    color: #005BAC;
  }

  @media (max-width: 600px) {
    padding: 1.4rem;
  }
`;

export const ResumenItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e7e7e7;
  margin-bottom: 1rem;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #ddd;

    @media (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const ResumenInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ResumenTitle = styled.p`
  font-weight: 600;
  color: #005BAC;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const ResumenPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #0a0a42;
  margin-top: 2px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const ResumenTotal = styled.strong`
  display: block;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  text-align: right;
  color: #0a0a42;
  font-weight: bold;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const CantidadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
`;

export const BtnQty = styled.button`
  background-color: #F7C948;
  border: none;
  width: 26px;
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  color: #1F4DA8;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: #FFD84D;
    transform: scale(1.05);
    transition: 0.2s ease;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    width: 22px;
    height: 22px;
    font-size: 16px;
  }
`;

export const QtyDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  min-width: 22px;
  text-align: center;
`;

export const Subtotal = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 6px;
  color: #0a0a42;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

/* ----------- CUOTAS ----------- */

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

/* ------------------- FORMULARIO ------------------- */

export const CompraForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 2rem;
  border-radius: 14px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
  gap: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #005BAC;
    margin-bottom: 0.5rem;
  }

  label {
    font-weight: 500;
    color: #333;
  }

  input,
  select {
    padding: 0.9rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: 0.2s ease;

    &:focus {
      border-color: #209ce4;
      box-shadow: 0 0 6px rgba(32,156,228,0.3);
      outline: none;
    }
  }

  @media (max-width: 600px) {
    padding: 1.4rem;
  }
`;

/* ------------------- FEEDBACK ------------------- */

export const MensajeCompra = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2e7d32;
  background: #e8f5e9;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #c8e6c9;
`;