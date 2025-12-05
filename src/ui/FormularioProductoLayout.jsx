import styled, { keyframes } from "styled-components";
import Boton from "../ui/Boton";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 50;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.2);
  animation: ${fadeIn} 0.35s cubic-bezier(0.25, 1.25, 0.5, 1);
  z-index: 1000;

  @media (max-width: 600px) {
    top: 80px;
    transform: translateX(-50%);
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
`;

export const ModalContent = styled.div`
  padding-top: 0.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

export const ModalHeaderTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export const TituloAzul = styled.span`
  color: #005BAC;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

/* ✅ Etiquetas y campos */
export const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #444;
  display: block;
`;

export const FormInputBase = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

/* ✅ Contenedor de botones */
export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

/* ✅ Botones premium basados en tu componente global */
export const ModalBtnPrimary = styled(Boton)`
  flex: 1;
  justify-content: center;
`;

export const ModalBtnSecondary = styled(Boton)`
  flex: 1;
  justify-content: center;
`;