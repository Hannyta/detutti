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
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BtnAgregar = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #004080;
  }
`;

export const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

export const ProductoCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductoImagen = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProductoNombre = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProductoPrecio = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #d32f2f;
`;

export const CuotasPromo = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const BloqueMagenta = styled.span`
  background: #e74883;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 0.8rem;
`;

export const BloqueAzul = styled.span`
  background: #209ce4;
  color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
`;

export const Acciones = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const BtnEditar = styled.button`
  background: #f1f1f1;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

export const BtnEliminar = styled.button`
  background: #d90429;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #a0001d;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const ModalText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const BtnCancel = styled.button`
  background: #f1f1f1;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

export const BtnDelete = styled.button`
  background: #d90429;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #a0001d;
  }
`;