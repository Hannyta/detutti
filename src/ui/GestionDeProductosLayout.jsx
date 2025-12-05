import styled from "styled-components";

export const GestionContainer = styled.div`
  padding: 2rem;
`;

export const GestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const GestionTitulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

export const BtnAgregarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const BtnAgregar = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.9rem 1.4rem;
  border-radius: 26px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export const ProductoCard = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductoImagen = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProductoNombre = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const ProductoPrecio = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CuotasPromo = styled.div`
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

export const BloqueMagenta = styled.span`
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

export const BloqueAzul = styled.span`
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

export const Acciones = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 1.2rem;
`;

export const BtnEditar = styled.button`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
  }
`;

export const BtnEliminar = styled.button`
  background: #d90429;
  color: #fff;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #a0001d;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 14px;
  padding: 2rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  border-top: 6px solid ${({ theme }) => theme.colors.primary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const BtnCancel = styled.button`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
  }
`;

export const BtnDelete = styled.button`
  background: #d90429;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #a0001d;
  }
`;