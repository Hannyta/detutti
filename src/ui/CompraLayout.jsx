import styled from "styled-components";

export const CompraContainer = styled.section`
  max-width: 1400px;
  margin: 10px auto;
  padding: 12px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
  align-items: stretch;
  min-height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding: 16px;
    gap: 1.5rem;
  }
`;


export const TituloPagina = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #004080;
  margin-bottom: 20px;
  letter-spacing: 0.5px;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

/* ------------------- RESUMEN ------------------- */

export const CompraResumen = styled.div`
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 16px;
  border: 1px solid #e6ecf5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;

  h3 {
    margin-bottom: 1rem;
    color: #004080;
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const ResumenItem = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1rem;
  background: #fafbff;
  border-radius: 14px;
  border: 1px solid #e0e6f0;
  margin-bottom: 1rem;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 12px;
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
  color: #004080;
  font-size: 1rem;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const ResumenPrice = styled.div`
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
  margin-top: 2rem;
  font-size: 1.6rem;
  text-align: right;
  color: #0a0a42;
  font-weight: 700;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.4rem;
  }
`;

export const CantidadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`;

export const BtnQty = styled.button`
  background-color: #e6f0ff;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #004080;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #004080;
    color: #fff;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    width: 26px;
    height: 26px;
    font-size: 16px;
  }
`;

export const QtyDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
`;

export const Subtotal = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 8px;
  color: #0a0a42;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

/* ----------- CUOTAS ----------- */

export const CuotasPromo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

export const BloqueMagenta = styled.span`
  background: linear-gradient(135deg, #e74883, #ff6fa5);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: nowrap;
  display: flex;
  align-items: center;
  z-index: 2;
  margin-right: -12px;
  box-shadow: 0 2px 6px rgba(231,72,131,0.4);
`;

export const BloqueAzul = styled.span`
  background: linear-gradient(135deg, #209ce4, #4db8ff);
  color: white;
  padding: 4px 14px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: nowrap;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0 2px 6px rgba(32,156,228,0.4);
`;

/* ------------------- FORMULARIO ------------------- */

export const CompraForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  gap: 1.2rem;

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  legend {
    font-size: 1.4rem;
    font-weight: 700;
    color: #004080;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 0.3rem;
  }

  label {
    font-weight: 500;
    color: #333;
    margin-bottom: 4px;
    display: block;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  input,
  select {
    padding: 0.9rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
    transition: all 0.2s ease;

    &:focus {
      border-color: #209ce4;
      box-shadow: 0 0 8px rgba(32,156,228,0.25);
      outline: none;
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

/* ------------------- FEEDBACK ------------------- */

export const MensajeCompra = styled.p`
  margin-top: 1.8rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2e7d32;
  background: #e8f5e9;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #c8e6c9;
  box-shadow: 0 2px 6px rgba(46,125,50,0.2);
`;